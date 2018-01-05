var mysql = require('mysql');
var parser = require('../lib/parser.js');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nba'
});

/*===========
== GETTERS ==
===========*/
var getEastTeams = () => {
  const query = "SELECT * FROM teams WHERE conference = 'East'";
  return new Promise ((resolve, reject) => {
    connection.query(query, (error, results) => error ? reject(error) : resolve(results));
  });
};

var getWestTeams = () => {
  const query = "SELECT * FROM teams WHERE conference = 'West'";
  return new Promise ((resolve, reject) => {
    connection.query(query, (error, results) => error ? reject(error) : resolve(results));
  });
};

var getAllTeamIDs = () => {
  var query = "SELECT team_id FROM standings";
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => error ? reject(error) : resolve(results));
  }).catch(err => console.log(err));
};

var getTeamStandings = () => {
  var query = "SELECT * FROM standings ORDER BY rank";
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => error ? reject(error) : resolve(results));
  }).catch(err => console.log(err));
};

var getTeamStats = team_id => {
  var query = "SELECT * FROM team_stats WHERE team_id = ?";
  return new Promise((resolve, reject) => {
    connection.query(query, [team_id], (error, results) => error ? reject(error) : resolve(results));
  }).catch(err => console.log(err));
};

/*============
=== INSERT ===
============*/

var insertTeamStandings = teams => {
  var query = "INSERT INTO standings SET ?";
  return Promise.all(teams.map(team => {
    new Promise((resolve, reject) => {
      connection.query(query, parser.team(team), (error, results) => error ? reject(error) : resolve(results));
    }).catch(err => console.log(err));
  }));
};

var insertTeamStats = teams => {
  var query = "INSERT INTO team_stats SET ?";
  return new Promise((resolve, reject) => {
    connection.query(query, parser.teamStats(teams), (error, results) => error? reject(error) : resolve(results));
  });
};

var insertPPGLeaders = players => {
  var query = "INSERT INTO pts_leader SET ?";
  return Promise.all(players.map(player => {
    new Promise((resolve, reject) => {
      connection.query(query, parser.pts(player), (error, results) => error ? reject(error) : resolve(results));
    }).catch(err => console.log(err));
  }));
};

var insertAPGLeaders = players => {
  var query = "INSERT INTO ast_leader SET ?";
  return Promise.all(players.map(player => {
    new Promise((resolve, reject) => {
      connection.query(query, parser.ast(player), (error, results) => error ? reject(error) : resolve(results));
    }).catch(err => console.log(err));
  }));
};

var insertRPGLeaders = players => {
  var query = "INSERT INTO reb_leader SET ?";
  return Promise.all(players.map(player => {
    new Promise((resolve, reject) => {
      connection.query(query, parser.reb(player), (error, results) => error ? reject(error) : resolve(results));
    }).catch(err => console.log(err));
  }));
};

module.exports = {
  getEastTeams,
  getWestTeams,
  getAllTeamIDs,
  getTeamStats,
  getTeamStandings,
  insertTeamStats,
  insertPPGLeaders,
  insertAPGLeaders,
  insertRPGLeaders,
  insertTeamStandings
};

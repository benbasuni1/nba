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
  var query = "SELECT team_id from standings";
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => error ? reject(error) : resolve(results));
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
     var parsedTeam = parser.teamStats(teams);
     resolve(parsedTeam);
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
  insertTeamStats,
  insertPPGLeaders,
  insertAPGLeaders,
  insertRPGLeaders,
  insertTeamStandings
};

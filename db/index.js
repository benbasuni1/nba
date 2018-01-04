var mysql = require('mysql');
var parser = require('../lib/parser.js');

var config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nba'
};

var connection = mysql.createConnection(config);

/*===========
== GETTERS ==
===========*/
var getEastTeams = () => {
  const query = "SELECT * FROM teams WHERE conference = 'East'";
  return new Promise ((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

var getWestTeams = () => {
  const query = "SELECT * FROM teams WHERE conference = 'West'";
  return new Promise ((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

/*============
=== INSERT ===
============*/

var insertPPGLeaders = players => {
  var query = "INSERT INTO pts_leader SET ?";
  return Promise.all(players.map(player => {
    new Promise((resolve, reject) => {
      connection.query(query, parser.pts(player), (error, results) => error ? reject(error) : resolve(results));
    }).catch(err => console.log(err));
  }));
};

module.exports = {
  getEastTeams,
  getWestTeams,
  insertPPGLeaders
};

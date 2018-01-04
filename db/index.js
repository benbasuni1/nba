var mysql = require('mysql');

var config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nba'
};

var connection = mysql.createConnection(config);

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

var getLeagueLeaders = category => {
  var query = '';
  if      (category === 'PTS') query = "SELECT * FROM leaders WHERE category = 'PTS'";
  else if (category === 'REB') query = "SELECT * FROM leaders WHERE category = 'REB'";
  else if (category === 'AST') query = "SELECT * FROM leaders WHERE category = 'AST'";

  return new Promise((resolve, reject) => {
    connection.query(query, (err, reults) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

var insertLeagueLeaders = {

};

module.exports = {
  getEastTeams,
  getWestTeams,
  getLeagueLeaders
};

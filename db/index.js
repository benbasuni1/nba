var mysql = require('mysql');

var config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nba'
};

var connection = mysql.createConnection(config);

var getEastTeams = cb => {
  const query = "SELECT * FROM teams WHERE conference = 'East'";
  new Promise ((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) cb(error);
      else cb(null, results);
    });
  });
};

var getWestTeams = cb => {
  const query = "SELECT * FROM teams WHERE conference = 'West'";
  new Promise ((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) cb(error);
      else cb(null, results);
    });
  });
};


module.exports = {
  getEastTeams,
  getWestTeams
};

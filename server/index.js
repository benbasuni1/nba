const dbHandlers = require('../db');
const nbaAPI = require('../lib/nbaAPI.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

app.get('/eastteams', (req, res) => {
  dbHandlers.getEastTeams()
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

app.get('/westteams', (req, res) => {
  dbHandlers.getWestTeams()
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

/* ==========
== Leaders ==
========== */
app.get('/leagueleaders/pts', (req, res) => {
  nbaAPI.getPTSLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    dbHandlers.insertPPGLeaders(players);
  });
});

app.get('/leagueleaders/ast', (req, res) => {
  nbaAPI.getASTLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    dbHandlers.insertAPGLeaders(players);
  });
});

app.get('/leagueleaders/reb', (req, res) => {
  nbaAPI.getREBLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    dbHandlers.insertRPGLeaders(players);
  });
});

app.listen(3000);

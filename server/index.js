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

app.get('/leagueleaders/pts', (req, res) => {
  nbaAPI.getPTSLeaders()
  .then(data => res.json(data.data.resultSet.rowSet));
});

app.listen(3000);

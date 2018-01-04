const sqlInteraction = require('../db');
const nbaInteraction = require('../lib/nbaAPI.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

app.get('/eastteams', (req, res) => {
  sqlInteraction.getEastTeams()
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

app.get('/westteams', (req, res) => {
  sqlInteraction.getWestTeams()
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

app.get('/standings', (req, res) => {
  nbaInteraction.getTeamStandings()
  .then(data => res.json(data.data.standing))
  .catch(err => res.json(err));
});

/* ==========
== Leaders ==
========== */
app.get('/leagueleaders/pts', (req, res) => {
  nbaInteraction.getPTSLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    sqlInteraction.insertPPGLeaders(players);
  });
});

app.get('/insert/standings', (req, res) => {
  nbaInteraction.getTeamStandings()
  .then(data => {
    var teams = data.data.standing;
    sqlInteraction.insertTeamStandings(teams);
    return teams;
  }).then(teams => res.json(teams));
});
/* ============================================================ */
app.get('/insert/team_stats', (req, res) => {
  nbaInteraction.getTeamStats()
  .then(data => {
    var teamStats = data.data.team_stats;
    return sqlInteraction.insertTeamStats(teamStats);
  }).then(data => res.json(data));
});
/* ============================================================ */

app.get('/leagueleaders/ast', (req, res) => {
  nbaInteraction.getASTLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    sqlInteraction.insertAPGLeaders(players);
  });
});

app.get('/leagueleaders/reb', (req, res) => {
  nbaInteraction.getREBLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    sqlInteraction.insertRPGLeaders(players);
  });
});

app.listen(3000);

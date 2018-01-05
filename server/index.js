const sqlInteraction = require('../db');
const cors = require('cors');
const nbaAPICall = require('../lib/nbaAPI.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(cors());
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
  sqlInteraction.getTeamStandings()
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

app.get('/teamstats', (req, res) => {
  var team_id = req.rawHeaders[9].split('/').slice(-1)[0];
  sqlInteraction.getTeamStats(team_id)
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

/* ==========
== Leaders ==
========== */
app.get('/leagueleaders/pts', (req, res) => {
  nbaAPICall.getPTSLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    sqlInteraction.insertPPGLeaders(players);
  });
});

app.get('/insert/standings', (req, res) => {
  nbaAPICall.getTeamStandings()
  .then(data => {
    var teams = data.data.standing;
    sqlInteraction.insertTeamStandings(teams);
    return teams;
  }).then(teams => res.json(teams));
});
/* ============================================================ */
app.get('/insert/team_stats', (req, res) => {
  sqlInteraction.getAllTeamIDs()
  .then(teamIds => {
    return nbaAPICall.getTeamStats(teamIds);
  })
  .then(data => {
    var teamStats = data.data.team_stats;
    return sqlInteraction.insertTeamStats(teamStats);
  }).then(data => res.json(data))
  .catch(err => console.log(err));
});
/* ============================================================ */

app.get('/leagueleaders/ast', (req, res) => {
  nbaAPICall.getASTLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    sqlInteraction.insertAPGLeaders(players);
  });
});

app.get('/leagueleaders/reb', (req, res) => {
  nbaAPICall.getREBLeaders()
  .then(data => {
    var players = data.data.resultSet.rowSet;
    sqlInteraction.insertRPGLeaders(players);
  });
});

app.listen(3000);

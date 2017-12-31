const dbHandlers = require('../db');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')

var defaultCorsHeaders = {
  'access-control-allow-origin': '127.0.0.1:3000'
}

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Static Assets
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.writeHead(404, defaultCorsHeaders);
});

app.get('/eastteams', (req, res) => {
  var end = {};
  dbHandlers.getEastTeams((err, result) => {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

app.get('/westteams', (req, res) => {
  var end = {};
  dbHandlers.getWestTeams((err, result) => {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

//Listen
app.listen(3000);

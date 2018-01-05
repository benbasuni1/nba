import React from 'react';
import axios from 'axios';
import parser from '../../../../../lib/parser.js';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        teams: []
    };
    this.getTeams = this.getTeams.bind(this);
  }

  componentDidMount() {
    this.getTeams();
  }

  getTeams() {
    return axios.get('/standings')
    .then(data => {
      var teams = parser.getTeamName(data.data);
      return teams;
    })
    .then(teams => {
      this.setState({
        teams: teams
      });
    })
    .catch(err => console.log(err));
  }

  renderBackgroundImage(data) {
    var team_id = data.team.replace(/\s+/g, '-').toLowerCase();
    var img = require('../../../assets/' + team_id + '.png');
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundPositionX = 'center;';
    document.body.style.backgroundRepeat =  'no-repeat';
    document.body.style.backgroundSize =  'contain';
    
  }

  render() {
    return (
        <div>{this.state.teams.map(team => <div className="team-individual" key={team} onClick={() => this.renderBackgroundImage({team})}>{team}</div>)}</div>
    );
  }

}

export default Teams;


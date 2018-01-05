import axios from 'axios';
import React from 'react';
import parser from '../../../../../lib/parser.js';
import Team from './Team.jsx';
import {Grid, Col, Row} from 'react-bootstrap';

var floatLeft = {
  float: 'left'
};

var floatRight = {
  float: 'right'
};

class Standings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eastTeams: [],
      westTeams: []
    };

    this.getTeams = this.getTeams.bind(this);
  }

  componentWillMount() {
    this.getTeams();
  }

  getTeams() {
    return axios.get('/standings')
    .then(data => {
      var teams = parser.eastAndWest(data.data);
      return teams;
    })
    .then(teams => {
      this.setState({
        eastTeams: teams.east,
        westTeams: teams.west
      });
    });
  }

  render() {
    return (
        <Grid>
            <Row>
                <Col mdOffset={1} md={3}>
                  <h2 className="east-standings">East</h2>
                  <div>
                    <span >Team Name</span>
                    <span >Win %</span>
                    <span >W-L</span>
                  </div>
                  {this.state.eastTeams.map(team => <Team changeToTeams={this.props.changeToTeams} key={team.team_id} team={team}/>)}
                </Col>
                <Col mdOffset={1} md={3}>
                  <h2 className="west-standings">West</h2>
                  <div>
                    <span >Team Name</span>
                    <span >Win %</span>
                    <span >W-L</span>
                  </div>
                  {this.state.westTeams.map(team => <Team changeToTeams={this.props.changeToTeams} key={team.team_id} team={team}/>)}
                </Col>
            </Row>
        </Grid>
    );
  }

}

export default Standings;
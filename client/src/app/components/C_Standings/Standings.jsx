import axios from 'axios';
import React from 'react';
import parser from '../../../../../lib/parser.js';
import Team from './Team.jsx';
import {Grid, Col, Row} from 'react-bootstrap';

class Standings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eastTeams: [],
      westTeams: []
    };

    this.getTeams = this.getTeams.bind(this);
  }

  componentDidMount() {
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
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
        <Grid>
            <Row>
                <Col mdOffset={1} md={3}>
                  <h2 className="east-standings">Eastern Conference</h2>
                  {this.state.eastTeams.map(team => <Team changePageType={this.props.changePageType} key={team.team_id} team={team}/>)}
                </Col>
                
                <Col mdOffset={1} md={3}>
                  <h2 className="west-standings">Western Conference</h2>
                  {this.state.westTeams.map(team => <Team changePageType={this.props.changePageType} key={team.team_id} team={team}/>)}
                </Col>
            </Row>
        </Grid>
    );
  }

}

export default Standings;
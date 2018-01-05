import React from 'react';
import axios from 'axios';
import parser from '../../../../../lib/parser.js';
import {Radar} from 'react-chartjs-2';
import {Grid, Col, Row} from 'react-bootstrap';
import img from '../../../assets/boston-celtics.png';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      radarData: {}
    };
    this.getTeamData = this.getTeamData.bind(this);
  }

  componentWillMount() {
    this.getTeamData();
  }

  getTeamData() {
    axios.get('/teamstats')
    .then(results => {
      var radarData = parser.forRadar(results.data[0]);
      this.setState({
        data: results.data[0],
        radarData: radarData
      });
    });
  }

  render() {
    return (
      <Grid >
        <Row className="teams-data">
          <Col md={2}>
            <h1 className="radar-text">Totals</h1>
              <div className="radar-text radar-points">Points: {this.state.data.pts}</div>
              <div className="radar-text radar-points">Rebounds: {this.state.data.reb}</div>
              <div className="radar-text radar-points">Assists: {this.state.data.ast}</div>
              <div className="radar-text radar-points">Steals: {this.state.data.stl}</div>
              <div className="radar-text radar-points">Blocks: {this.state.data.blk}</div>
              <div className="radar-text radar-points">Fouls: {this.state.data.pf}</div>
            <hr/>

            <h1 className="radar-text">Percentages</h1>
              <div className="radar-text radar-points">FG: {((this.state.data.fgm / this.state.data.fga) * 100).toFixed(2)}%</div>
              <div className="radar-text radar-points">FT: {((this.state.data.ftm / this.state.data.fta) * 100).toFixed(2)}%</div>
              <div className="radar-text radar-points">3PT: {((this.state.data.threesMade / this.state.data.threesAttempted) * 100).toFixed(2)}%</div>
            <hr/>

            <h1 className="radar-text">Average</h1>
              <div className="radar-text radar-points">PPG: {(this.state.data.pts / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">RPG: {(this.state.data.reb / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">APG: {(this.state.data.ast / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">SPG: {(this.state.data.stl / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">BPG: {(this.state.data.blk / this.state.data.games_played).toFixed(2)}</div>

          </Col>
          <Col md={2}>
            <h1 className="radar-text">Opponent Totals</h1>
              <div className="radar-text radar-points">Points: {this.state.data.vs_pts}</div>
              <div className="radar-text radar-points">Rebounds: {this.state.data.vs_reb}</div>
              <div className="radar-text radar-points">Assists: {this.state.data.vs_ast}</div>
              <div className="radar-text radar-points">Steals: {this.state.data.vs_stl}</div>
              <div className="radar-text radar-points">Blocks: {this.state.data.vs_blk}</div>
              <div className="radar-text radar-points">Fouls: {this.state.data.vs_pf}</div>
            <hr/>

            <h1 className="radar-text">Opponent Percentages</h1>
              <div className="radar-text radar-points">FG: {((this.state.data.vs_fgm / this.state.data.vs_fga) * 100).toFixed(2)}%</div>
              <div className="radar-text radar-points">FT: {((this.state.data.vs_ftm / this.state.data.vs_fta) * 100).toFixed(2)}%</div>
              <div className="radar-text radar-points">3PT: {((this.state.data.vs_threesMade / this.state.data.vs_threesAttempted) * 100).toFixed(2)}%</div>
            <hr/>

            <h1 className="radar-text">Opponent Average</h1>
              <div className="radar-text radar-points">PPG: {(this.state.data.vs_pts / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">RPG: {(this.state.data.vs_reb / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">APG: {(this.state.data.vs_ast / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">SPG: {(this.state.data.vs_stl / this.state.data.games_played).toFixed(2)}</div>
              <div className="radar-text radar-points">BPG: {(this.state.data.vs_blk / this.state.data.games_played).toFixed(2)}</div>

          </Col>
          <Col md={6} className="radar">
            <div>
              <Radar className="radar" data={this.state.radarData} />
              <br/><br/>
              <div className="radar-team-name">{this.state.data.team_name}</div>
              <div className="radar-team-name">({this.state.data.won} -{this.state.data.lost})</div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Statistics
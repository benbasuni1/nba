import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var team = this.props.team;
    return (
      <Router>
        <Link to={'/stats/' + team.team_id} >
          <div onClick={() => this.props.changePageType('statistics')} className={'team ' + team.team_id}> 
              <span className={'rank ' + team.team_id}>{team.rank}. </span>
              <span className={'name ' + team.team_id}>{team.first_name + ' ' + team.last_name} </span>
              <span className={'win-loss ' + team.team_id}> {team.won}-{team.lost} </span>
              <span className={'win-percentage ' + team.team_id}> {team.win_percentage} </span>
          </div>
        </Link>
        </Router>
    );
  }

}

export default Team;

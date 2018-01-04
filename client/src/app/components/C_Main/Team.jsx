import React from 'react';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var team = this.props.team;
    return (
        <div className={'team ' + team.team_id}> 
            <span className={'logo ' + team.team_id}></span>
            <span className={'rank ' + team.team_id}>{team.rank}. </span>
            <span className={'name ' + team.team_id}>{team.first_name + ' ' + team.last_name} </span>
            <span className={'win-loss ' + team.team_id}> {team.won}-{team.lost} </span>
            <span className={'win-percentage ' + team.team_id}> {team.win_percentage} </span>
        </div>
    );
  }

}

export default Team;

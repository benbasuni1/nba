import React from 'react';
import $ from 'jquery';

class WesternConferenceComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    this.getWestTeams();
  }

  getWestTeams() {
    var teams = [];
    $.get('/westteams', data => {
      for (var team of data) {
        teams.push({
          name: team.cityname + ' ' + team.teamname,
          abbr: team.abbr,
          id  : team.id
        });
      }
      this.setState({
        teams: teams,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.teams.map( team => <div align="center" key={team.abbr} className={team.abbr + ' team'}>{team.name}</div> )}
      </div>
    )
  }

}

export default WesternConferenceComponent;



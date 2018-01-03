import React from 'react';
import $ from 'jquery';

class EastTeams extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }

  componentWillMount() {
    this.getEastTeams()
  }

  getEastTeams() {
    var end = [];
    $.get('/eastteams', data => {
      for (var team of data)  {
        end.push({
          name: team.cityname + ' ' + team.teamname,
          abbr: team.abbr
        });
      }
      this.setState({teams: end});
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

export default EastTeams;


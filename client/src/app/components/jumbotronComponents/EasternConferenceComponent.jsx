import React from 'react';
import $ from 'jquery';

class EasternConferenceComponent extends React.Component {

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
      for (var name of data)  {
        end.push(name.cityname + ' ' + name.teamname);
      }
      this.setState({teams: end});
    });
  }

  render() {
    return (
      <div>
        {this.state.teams.map( team => <div align="center" key={team}>{team}</div> )}
      </div>
    )
  }
}

export default EasternConferenceComponent;


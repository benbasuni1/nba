import React from 'react';

class WesternConferenceComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams : [
        'Dallas Mavericks', 'Denver Nuggets', 'Golden State Warriors', 'Houston Rockets', 
        'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Minnesota Timberwolves', 
        'New Orleans Pelicans', 'Oklahoma City Thunder', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings',
        'San Antonio Spurs', 'Utah Jazz'
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.teams.map( team => <div align="center">{team}</div> )}
      </div>
    )
  }

}

export default WesternConferenceComponent;



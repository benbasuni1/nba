import React from 'react';

class EasternConferenceComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams : [
        'Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls',
        'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 'Miami Heat', 'Milwaukee Bucks',
        'New York Knicks', 'Orlando Magic', 'Philadelphia 76ers', 'Toronto Raptors', 'Washington Wizards'
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

export default EasternConferenceComponent;


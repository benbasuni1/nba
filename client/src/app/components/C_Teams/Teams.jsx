import React from 'react';
import axios from 'axios';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getTeamData = this.getTeamData.bind(this);
  }

  componentWillMount() {
    this.getTeamData();
  }

  getTeamData() {
    axios.get('/teamstats')
    .then(results => {
      console.log(results.data[0]);
      this.setState({
        data: results.data[0]
      });
    });
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.data).map(key => {
          return (
            <div>
              <div key={key}>{key}: {this.state.data[key]}</div>
            </div>
           )
        })}
      </div>
    );
  }
}

export default Teams
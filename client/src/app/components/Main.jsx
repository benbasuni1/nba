import axios from 'axios';
import React from 'react';
import Standings from './C_Standings/Standings.jsx';
import Statistics from './C_Statistics/Statistics.jsx'; 
import {Grid, Col, Row} from 'react-bootstrap';
import backgroundImg from '../../assets/nba-background.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pageType = this.props.pageType;
    let item;
    if (pageType === 'standings') {
      item = <Standings changeToStats={this.props.changeToStats}/>
      document.body.style.backgroundImage = `url(${backgroundImg})`;
    }
    else if (pageType === 'statistics') {
      item = <Statistics changeToStats={this.props.changeToStats}/>
      document.body.style.backgroundImage = 'none';
    }

    return (
      <div className="standings">
        {item}
      </div>
    );
  }

}

export default Main;
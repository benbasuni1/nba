import axios from 'axios';
import React from 'react';
import Standings from './C_Standings/Standings.jsx';
import Statistics from './C_Statistics/Statistics.jsx'; 
import Teams from './C_Teams/Teams.jsx'; 
import {Grid, Col, Row} from 'react-bootstrap';
import backgroundImg from '../../assets/nba-background.png';
import teamsImg from '../../assets/team-names.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pageType = this.props.pageType;
    let item;
    if (pageType === 'standings') {
      item = <Standings changePageType={this.props.changePageType}/>
      document.body.style.backgroundImage = `url(${backgroundImg})`;
      document.body.style.backgroundRepeat = 'repeat';
    } else if (pageType === 'statistics') {
      item = <Statistics changePageType={this.props.changePageType}/>
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = 'darkgrey';
    } else if (pageType === 'teams') {
      item = <Teams changePageType={this.props.changePageType}/>
      document.body.style.backgroundImage = `url(${backgroundImg})`;
    }

    return (
      <div className="standings">
        {item}
      </div>
    );
  }


}

export default Main;
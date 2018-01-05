import axios from 'axios';
import React from 'react';
import Standings from './C_Standings/Standings.jsx';
import Teams from './C_Teams/Teams.jsx'; 
import {Grid, Col, Row} from 'react-bootstrap';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let pageType = this.props.pageType;
    let item;
    if (pageType === 'standings') {
      item = <Standings changeToTeams={this.props.changeToTeams}/>
      document.body.style.backgroundColor = 'currentColor';
    }
    else if (pageType === 'teams') {
      item = <Teams changeToTeams={this.props.changeToTeams}/>
      document.body.style.backgroundColor = 'white';
    }

    return (
      <div className="standings">
        {item}
      </div>
    );
  }

}

export default Main;
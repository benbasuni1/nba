import React from 'react';
import EastTeams from './MainComponents/EastTeams.jsx';
import WestTeams from './MainComponents/WestTeams.jsx';
import Stats from './MainComponents/Stats.jsx';
import {Grid, Col, Row} from 'react-bootstrap';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EastStandings/>
        <WestStandings/>
      </div>
    );
  }

}

export default Main;
            {/* <Col md={4}> <EastTeams /> </Col>
            <Col md={4}> <WestTeams /> </Col>
            <Col md={4}> <Stats /> </Col> */}
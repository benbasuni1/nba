import React from 'react';
import Standings from './C_Main/Standings.jsx';
import {Grid, Col, Row} from 'react-bootstrap';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let item = <Standings/>
    return (
      <div className="standings">
        {item}
      </div>
    );
  }

}

export default Main;
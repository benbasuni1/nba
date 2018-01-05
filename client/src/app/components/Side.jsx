import React from 'react';
import {stack as Sidebar} from 'react-burger-menu';
import {NavDropdown, MenuItem, Image} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import nbaLogo from '../../assets/nba-logo.png';

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <Sidebar width={280} isOpen={true} noOverlay className="sidebar">
          <Link to="/"><span className="side-item" onClick={this.props.changeToHome}>Standings</span></Link>
          <a className="side-item">Teams</a>
          <a className="side-item">Players</a>
          <a className="side-item">Stats</a>
          <a className="side-item">Graphs</a>
          <a className="side-item">Schedule</a>
          <img className="nba-logo" src={nbaLogo}/>
        </Sidebar>
      </Router>
    );
  }
}

export default Side;

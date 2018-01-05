import React from 'react';
import {stack as Sidebar} from 'react-burger-menu';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

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
          <NavDropdown id="nav-dropdown" className="side-item" eventKey={3} title="Schedule">
            <MenuItem eventKey={3.1}>Today</MenuItem>
            <MenuItem eventKey={3.2}>Weekly</MenuItem>
            <MenuItem eventKey={3.3}>Monthly</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>By Team</MenuItem>
          </NavDropdown>
        </Sidebar>
      </Router>
    );
  }
}

export default Side;

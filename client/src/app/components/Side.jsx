import React from 'react';
import {stack as Sidebar} from 'react-burger-menu';
import {NavDropdown, MenuItem} from 'react-bootstrap';

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Sidebar width={280} isOpen={true} noOverlay className="sidebar">

        <NavDropdown className="side-item" eventKey={3} title="League Standings" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

        <NavDropdown className="side-item" eventKey={3} title="Teams" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

        <NavDropdown className="side-item" eventKey={3} title="Players" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

        <NavDropdown className="side-item" eventKey={3} title="Stats" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

        {/* <a id="home" className="side-item" href="/">Home</a>
        <a id="about" className="side-item" href="/about">About</a>
        <a id="contact" className="side-item" href="/contact">Contact</a> */}

      </Sidebar>
    );
  }
}

export default Side;

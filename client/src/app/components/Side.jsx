import React from 'react';
import {stack as Sidebar} from 'react-burger-menu';
import {NavDropdown, MenuItem} from 'react-bootstrap';

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Sidebar width={280} isOpen={false} noOverlay className="sidebar">

        <a className="side-item">Standings</a>

        <NavDropdown className="side-item" eventKey={3} title="Teams">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

        <NavDropdown className="side-item" eventKey={3} title="Players">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

        <NavDropdown className="side-item" eventKey={3} title="Stats">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

        <NavDropdown className="side-item" eventKey={3} title="Schedule">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
        
        <NavDropdown className="side-item" eventKey={3} title="Graphs">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>

      </Sidebar>
    );
  }
}

export default Side;

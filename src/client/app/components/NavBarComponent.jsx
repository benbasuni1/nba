import React from 'react';
import {FormControl, FormGroup, ControlLabel, Nav, Navbar, NavItem, Button, Image} from 'react-bootstrap';

class NavBarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="https://www.nba.com">NBA</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <Navbar.Form >
                <FormGroup className="search-bar">
                  <FormControl type="text" placeholder="Search" />
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Navbar.Form>
            </Nav>
            <Nav pullRight>
              <NavItem href="#" pullRight><Image className="nba-logo" src="../../assets/nba-logo.jpeg" circle /></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}

export default NavBarComponent;


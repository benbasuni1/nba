import React from 'react';
import {FormControl, FormGroup, ControlLabel, Nav, Navbar, NavItem, Button, Image} from 'react-bootstrap';

class NavBarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.items = props.items;
    this.state = {
      value: ''
    };
  }

  handleChange(data) {
    this.setState({value: data.target.value});
  }

  handleClick() {
    console.log('handled click!');
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
                  <input type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
                </FormGroup>
                <Button type="submit" onClick={this.handleClick}>Submit</Button>
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


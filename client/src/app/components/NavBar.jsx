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
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl className="search" type="text" placeholder="Search" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }

}

export default NavBarComponent;
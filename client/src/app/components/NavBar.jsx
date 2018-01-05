import React from 'react';
import axios from 'axios';
import {FormControl, FormGroup, ControlLabel, Nav, Navbar, NavItem, Button, Image, ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import {Router, Link, BrowserRouter} from 'react-router-dom';

class NavBarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setToggleValue = this.setToggleValue.bind(this);
    this.getPlayerId = this.getPlayerId.bind(this);
    this.state = {
      value: '',
      toggleValue: ''
    };
  }

  setToggleValue(data) {
    this.setState({
      toggleValue: data
    });
  }

  handleChange(data) {
    this.setState({value: data.target.value});
  }

  getPlayerId(first, last) {
    axios.get('http://api.suredbits.com/nba/v0/players')
    .then (result => {
      console.log(result);
    });
  }

  handleClick(data) {
    if (this.state.toggleValue === 'teams') {
      window.location.href = "http://www.nba.com/teams/" + data.target.value;
    } else if (this.state.toggleValue === 'players') {
      var player = data.target.value.replace(' ', '/').toLowerCase();
      // console.log(this.getPlayerId(data.target.value.split(' ')[0], data.target.value.split(' ')[1]));
      window.location.href = "http://www.nba.com/players/" + player;
    }
  }

  render() {
    return (
      <BrowserRouter>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><span onClick={() => this.props.changePageType('standings')}>NBA</span></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl className="search" type="text" placeholder="Search" value={this.state.value} onChange={(data) => this.handleChange(data)}/>
            </FormGroup>
            <Button value={this.state.value} onClick={this.handleClick} type="submit">Submit</Button>
          </Navbar.Form>
          <ButtonToolbar>
            <ToggleButtonGroup className="toggle-button-group" type="radio" name="options">
              <ToggleButton onClick={() => this.setToggleValue('teams')}value={1}>Teams
              </ToggleButton>
              <ToggleButton onClick={() => this.setToggleValue('players')}value={2}>Players</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Navbar.Collapse>
      </Navbar>
      </BrowserRouter>
    );
  }

}

export default NavBarComponent;
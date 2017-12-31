import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBarComponent.jsx';
import Jumbotron from './components/JumbotronComponent.jsx';
import Schedule from './components/ScheduleComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.searchNBA.bind(this);
  }

  searchNBA(data) {
    console.log("data: " + data.target.value);
    this.setState({ items: data.target.value });
  }

  setTeams(data) {

  }

  render() {
    return (
      <div id="main-container">
        <NavBar searchNBA={this.searchNBA} item={this.state.items}/>
        <Jumbotron setTeams={this.setTeams}/>
        <Schedule />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));


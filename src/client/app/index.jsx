import React from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';
import NavBar from './components/NavBarComponent.jsx';
import Jumbotron from './components/JumbotronComponent.jsx';
import Schedule from './components/ScheduleComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div id="main-container">
        <NavBar />
        <Jumbotron /><br>
        <Schedule />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));


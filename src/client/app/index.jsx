import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import NavBar from './components/NavBarComponent.jsx';
import Content from './components/ContentComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div id="main-container">
        <NavBar />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));


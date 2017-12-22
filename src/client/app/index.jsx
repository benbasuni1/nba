import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import NavBar from './components/NavBarComponent.jsx';
import Content from './components/ContentComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello React Project</p>
        <AwesomeComponent />
        <NavBar />
        <Button>Default</Button>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));


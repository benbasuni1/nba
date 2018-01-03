import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBar.jsx';
import Main from './components/Main.jsx';
import Schedule from './components/Schedule.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-container">
        <NavBar/>
        <Main/>
        <Schedule/>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));


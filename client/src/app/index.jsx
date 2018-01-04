import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { render } from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Side from './components/Side.jsx';
import Main from './components/Main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = <Main/>
    return (
      <div id="main-container">
        <NavBar/>
        <Side/>
        <Grid>
          <Row>
            <Col mdOffset={3}>{item}</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
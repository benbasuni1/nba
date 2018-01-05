import React from 'react';
import { render } from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import NavBar from './components/NavBar.jsx';
import Side from './components/Side.jsx';
import Main from './components/Main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageType: 'standings'
    };

    this.changePageType = this.changePageType.bind(this);
  }

  changePageType(type) { this.setState({ pageType: type });}

  render() {
    let item = <Main changePageType={this.changePageType} changeToStats={this.changeToStats} pageType={this.state.pageType}/>
    return (
        <div id="main-container">
          <NavBar changePageType={this.changePageType}/>
          <Side changePageType={this.changePageType} />
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
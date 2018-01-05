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

    this.changeToStats = this.changeToStats.bind(this);
    this.changeToHome = this.changeToHome.bind(this);
  }

  changeToStats() { this.setState({ pageType: 'statistics' }); }
  changeToHome() { this.setState({ pageType: 'standings'}); }

  render() {
    let item = <Main changeToStats={this.changeToStats} pageType={this.state.pageType}/>
    return (
        <div id="main-container">
          <NavBar changeToStats={this.changeToTeams} changeToHome={this.changeToHome} />
          <Side changeToHome={this.changeToHome} />
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
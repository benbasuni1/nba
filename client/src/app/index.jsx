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

    this.changeToTeams = this.changeToTeams.bind(this);
    this.changeToHome = this.changeToHome.bind(this);
  }

  changeToTeams() { this.setState({ pageType: 'teams' }); }
  changeToHome() { this.setState({ pageType: 'standings'}); }

  render() {
    let item = <Main changeToTeams={this.changeToTeams} pageType={this.state.pageType}/>
    return (
        <div id="main-container">
          <NavBar changeToHome={this.changeToHome} />
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
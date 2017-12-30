import React from 'react';
import EasternConference from './jumbotronComponents/EasternConferenceComponent.jsx';
import WesternConference from './jumbotronComponents/WesternConferenceComponent.jsx';
import Stats from './jumbotronComponents/StatsComponent.jsx';
import {Grid, Col, Row} from 'react-bootstrap';

class JumbotronComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid"> 
            <Col md={4}>
              <EasternConference />
            </Col>
            <Col md={4}>
              <WesternConference />
            </Col>
            <Col md={4}>
              <Stats />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default JumbotronComponent;

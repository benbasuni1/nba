import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

class Standings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Grid>
            <Row>
                <Col mdOffset={2} md={3}><h2 className="east-standings">East</h2></Col>
                <Col mdOffset={1} md={3}><h2 className="west-standings">West</h2></Col>
            </Row>
        </Grid>
    );
  }

}

export default Standings;
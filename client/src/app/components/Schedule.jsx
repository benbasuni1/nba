import React from 'react';
import {Grid, Col, Row, Table} from 'react-bootstrap';

class ScheduleComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Grid>
      <Row className="show-grid">
        <Col mdOffset={1}>
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <td>
                  <div>NOP</div>
                  <div>
                    ORL  <span className="game-time">8:00PM</span>
                  </div>
                </td>
                <td>
                  <div>SAC</div>
                  <div>
                    CHI  <span className="game-time">4:30PM</span>
                  </div>
                </td>
                <td>
                  <div>TOR</div>
                  <div>
                    GSW  <span className="game-time">7:00PM</span>
                  </div>
                </td>
                <td>
                  <div>MIA</div>
                  <div>
                    IND  <span className="game-time">6:30PM</span>
                  </div>
                </td>
                <td>
                  <div>UTA</div>
                  <div>
                    PHO  <span className="game-time">5:30PM</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>PHI</div>
                  <div>
                    BKN  <span className="game-time">6:30PM</span>
                  </div>
                </td>
                <td>
                  <div>DET</div>
                  <div>
                    MIL  <span className="game-time">4:30PM</span>
                  </div>
                </td>
                <td>
                  <div>MIN</div>
                  <div>
                    HOU  <span className="game-time">7:00PM</span>
                  </div>
                </td>
                <td>
                  <div>LAL</div>
                  <div>
                    LAC  <span className="game-time">4:30PM</span>
                  </div>
                </td>
                <td>
                  <div>POR</div>
                  <div>
                    CHA  <span className="game-time">8:00PM</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
    );
  }

}

export default ScheduleComponent;


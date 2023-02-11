import React from 'react'
import styles from '../../common.module.css';
import { Row, Col, Button, Table } from 'react-bootstrap';

const capitalPercentage = () => {
  return (
      <>
            <div>
              <div className={`${styles.mainHeading} text-center p-2`}>
                <label className={`${styles.font17} text-light ${styles.fw700}`}>Agent capital</label>
              </div>
              <Row className="mx-0">
                <Col className={`${styles.font18} p-0 border-0`}>
                  <Table striped hover size="sm" className={`${styles.contenttable} my-0`}>
                    <tbody>
                      <tr className={`${styles.font17} ${styles.fw700}`}>
                        <td>Deposit bonus %</td>
                        <td>Other bonus %</td>
                        <td>Return %</td>
                        <td>Jackpot bonus %</td>
                        <td>Marketing bonus %</td>
                      </tr>

                      <tr className={`${styles.font17} ${styles.fw700}`}>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
            <div>
              <div className={`${styles.mainHeading} text-center p-2`}>
                <label className={`${styles.font17} text-light ${styles.fw700}`}>
                  System fee (system fee = total winnings and losing customers * % system fee)
                </label>
              </div>
              <Row className={`mx-0 ${styles.seagreenBg} ${styles.rounded2}`}>
                <Col className={`${styles.font17}my-2 mx-2 ${styles.fontBlue}  col-xl-5 col-md-6 col-xs-12 py-2`}>
                  <label className={`${styles.fw700} col-md-6 col-sm-12`}>100</label>
                </Col>
              </Row>
            </div>
            <div>
              <div className={`${styles.mainHeading} text-center p-2`}>
                <label className={`${styles.font17} text-light ${styles.fw700}`}>Payment cycle</label>
              </div>

              <Row className={` ${styles.seagreenBg} mx-0 rounded my-1`}>
                <Col className="col-4 form-check form-check-inline mx-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label">Daily ( 00: 00 ~ 23: 59 GMT +8) </label>
                </Col>
                <Col className="col-5  form-check form-check-inline">
                  <a href="/sale-team-management/agent-group/create-member">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label text-dark">Weekly( 00: 00 Monday~ 23: 59 Sunday GMT +8) </label>
                  </a>
                </Col>
                <Col className="col-2 form-check form-check-inline">
                  <a href="/sale-team-management/agent-group/create-member">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label text-dark">Monthly</label>
                  </a>
                </Col>
              </Row>
            </div>

            <div>
              <div className={`${styles.mainHeading} text-center p-2`}>
                <label className={`${styles.font17} text-light ${styles.fw700}`}>Statistical conditions</label>
              </div>
              <Row className="mx-0">
                <Col
                  className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-6 col-md-6 col-xs-12 py-2`}
                >
                  <label className={`${styles.fw700} col-md-6 col-sm-12`}>Total operating revenue:</label>
                  <input className={`${styles.fw700} col-md-6 col-sm-12`} type="text" name="" id="" placeholder="0" />
                </Col>
                <Col
                  className={`${styles.font17} ${styles.seagreenBg}  my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-5 col-md-6 col-xs-12 py-2`}
                >
                  <label className={`${styles.fw700} col-md-6 col-sm-12`}> Number of active guests:</label>
                  <input className={`${styles.fw700} col-md-6 col-sm-12`} type="text" name="" id="" placeholder="0" />
                </Col>
              </Row>
            </div>
            <div>
              <div className={`${styles.mainHeading} text-center p-2`}>
                <label className={`${styles.font17} text-light ${styles.fw700}`}>
                  Customer operating conditions ( at least 1 line, must be even number &gt; 0)
                </label>
              </div>
              <Row className="mx-0">
                <Col
                  className={`${styles.font17} ${styles.seagreenBg}  my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-5 col-md-6 col-xs-12 py-2`}
                >
                  <label className={`${styles.fw700} col-md-6 col-sm-12`}>Lowest effective bet:</label>
                  <input className={`${styles.fw700} col-md-6 col-sm-12`} type="text" name="" id="" placeholder="0" />
                </Col>
                <Col
                  className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-6 col-md-6 col-xs-12 py-2`}
                >
                  <label className={`${styles.fw700} col-md-6 col-sm-12`}> Lowest charge:</label>
                  <input className={`${styles.fw700} col-md-6 col-sm-12`} type="text" name="" id="" placeholder="0" />
                </Col>
              </Row>
            </div>
            <div>
              <div className={`${styles.mainHeading} text-center p-2`}>
                <label className={`${styles.font17} text-light ${styles.fw700}`}>% game</label>
              </div>
              <Row className="mx-0">
                <Col
                  className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-5 col-md-6 col-xs-12 py-2`}
                >
                  <label className={`${styles.fw700} col-md-6 col-sm-12`}>Maximum value 8%: </label>
                  <input className={`${styles.fw700} col-md-6 col-sm-12`} type="text" name="" id="" placeholder="0%" />
                </Col>
              </Row>
            </div>

            <Row className="mx-0 my-2">
              <Col className={` ${styles.rounded2} py-2 text-center`}>
                <Button className={` ${styles.font17} mx-2 mb-1 bg-secondary`}>Back</Button>
                <Button className={`${styles.font17} ${styles.gradientBlue} mb-1 px-5`}>Next</Button>
              </Col>
            </Row>
          </>
  )
}

export default capitalPercentage
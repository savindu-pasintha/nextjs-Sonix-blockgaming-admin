import React from 'react';
import styles from '../../common.module.css';
import { Row, Col, Button, Tab, Tabs, Table } from 'react-bootstrap';
import MUIDataTable from 'mui-datatables';
import { HiDownload } from 'react-icons/hi';
import CapitalPercentage from './capital-percentage';

const columns = [
  'Livecasino',
  'Status',
  'Sportbook',
  'Status',
  'Slot games',
  'Status',
  'Jackpot',
  'Status',
  'MPG ',
  'Status',
];

const data = [
  ['Game 1', 'On/Off', 'Game 2', 'On/Off ', 'Game 3', 'On/Off', 'Game 4', 'On/Off', 'Game 5', 'On/Off'],
  ['Game 1', 'On/Off', 'Game 2', 'On/Off ', 'Game 3', 'On/Off', 'Game 4', 'On/Off', 'Game 5', 'On/Off'],
  ['Game 1', 'On/Off', 'Game 2', 'On/Off ', 'Game 3', 'On/Off', 'Game 4', 'On/Off', 'Game 5', 'On/Off'],
  ['Game 1', 'On/Off', 'Game 2', 'On/Off ', 'Game 3', 'On/Off', 'Game 4', 'On/Off', 'Game 5', 'On/Off'],
  ['Game 1', 'On/Off', 'Game 2', 'On/Off ', 'Game 3', 'On/Off', 'Game 4', 'On/Off', 'Game 5', 'On/Off'],
];
const agentInfo = () => {
  return (
    <>
      <div className="mb-3 shadow pb-5 bg-light">
        <div className={`${styles.headerDiv} d-flex`}>
          <Row className="col-12 mx-0">
            <Col className="px-5 pb-4 col-12 text-center">
              <span
                className={` ${styles.font16} ${styles.fw700} font-weight-bold bg-light text-center px-5 py-1 font-blue  top-0 rounded `}
              >
                Agent information
              </span>
            </Col>
          </Row>
        </div>

        <Tabs defaultActiveKey="agentinformation" id="" className={` ${styles.headerDiv} text-light mb-3`}>
          <Tab eventKey="agentinformation" title="Agent information">
            <Row className='justify-content-center'>
              <Col className="col-md-5 col-sx-12">
                <div className={` ${styles.rounded2} bg-white`}>
                  <Table striped hover size="sm" className={`${styles.contenttable} `}>
                    <caption className=" text-center pb-4 caption-top">
                      <span className={`px-5 pt-3 pb-2 ${styles.contentcaption}`}>Account data</span>
                    </caption>
                    <tbody>
                      <tr>
                        <td>ID Agent </td>
                        <td>EZBets68</td>
                      </tr>
                      <tr>
                        <td>Agent Level </td>
                        <td>SSMA</td>
                      </tr>
                      <tr>
                        <td>Real name </td>
                        <td>LV</td>
                      </tr>
                      <tr>
                        <td>Number phone </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td>Agent ID status </td>
                        <td>Activate </td>
                      </tr>
                      <tr>
                        <td>New agent group </td>
                        <td>EZBets68</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className={` ${styles.rounded2} bg-white pb-2`}>
                  <Table striped hover size="sm" className={`${styles.contenttable} `}>
                    <caption className="text-center pb-1 caption-top">
                      <span className={`px-4 pt-3 pb-2 ${styles.contentcaption}`}>Sponsor link</span>
                    </caption>
                  </Table>
                  <Col
                    className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} p-2 `}
                  >
                    <label className={`${styles.fw700}`}>https://www.wewin247.com/sưqri0303</label>
                  </Col></div>
              </Col>
              <Col className="col-md-6 col-xs-12 mx-1">
                <Row>
                  <div className={` ${styles.rounded2} bg-white mb-3`}>
                    <Table striped hover size="sm" className={styles.contenttable}>
                      <caption className="text-center pb-4 caption-top">
                        <span className={`px-5 pt-3 pb-2 ${styles.contentcaption}`}>Offline information</span>
                      </caption>
                      <thead className="bg-white">
                        <th></th>
                        <th>Activate</th>
                        <th>Disable</th>
                        <th>Inactive</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Number of agents </td>
                          <td>25</td>
                          <td>9</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Affiliated customers </td>
                          <td>25</td>
                          <td>9</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Number of customers in the agency </td>
                          <td>39525</td>
                          <td>78</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className={` ${styles.rounded2} bg-white mb-2`}>
                    <Table striped hover size="sm" className={styles.contenttable}>
                      <caption className="text-center pb-1 caption-top">
                        <span className={`px-5 pt-3 pb-2 ${styles.contentcaption}`}>Login status</span>
                      </caption>
                    </Table>
                      <Row className="my-2">
                        <Col
                          className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-6 col-xs-12 py-2 `}
                        >
                          <label className={`${styles.fw700} col-md-5 col-sm-12`}>Registration date </label>
                          <label className={`${styles.fw700} col-md-7 col-sm-12`}>2022-09-01 00: 00: 00 </label>
                        </Col>
                        <Col
                          className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-xs-12 py-2 `}
                        >
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}> IP registration</label>
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}> 123.345.453</label>
                        </Col>
                      </Row>
                      <Row className="my-2">
                        <Col
                          className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-6 col-xs-12 py-2 `}
                        >
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}>FB registration</label>
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}>sfi35i436... </label>
                        </Col>
                      
                        <Col
                          className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-xs-12 py-2 `}
                        >
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}>Time of last login </label>
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}>2022-09-01 00: 00: 00 </label>
                        </Col>
                        </Row>
                      <Row className="my-2">
                        <Col
                          className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-6 col-xs-12 py-2 `}
                        >
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}>Last login IP</label>
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}> 123.345.453</label>
                        </Col>
                        <Col
                          className={`${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-xs-12 py-2 `}
                        >
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}>Last login IP</label>
                          <label className={`${styles.fw700} col-md-6 col-sm-12`}>sfi35i436... </label>
                        </Col>
                      </Row>
                  </div>
                </Row>

              </Col>
            </Row>


            <Row className="mx-0">
              <Table striped hover size="sm" className={styles.contenttable}>
                <thead className={`${styles.mainHeading} mx-0 text-light p-2`}>
                  <tr>
                    <th className="text-light px-4">Registration link</th>
                    <th className="text-light px-4">Referral link</th>
                    <th className="text-light px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Marketing page ( promotion)</td>
                    <td>https://ezbets68.com</td>
                    <td>
                      <HiDownload />
                    </td>
                  </tr>
                  <tr>
                    <td>Marketing page ( promotion)</td>
                    <td>https://ezbets68.com</td>
                    <td>
                      <HiDownload />
                    </td>
                  </tr>
                  <tr>
                    <td>Marketing page ( promotion)</td>
                    <td>https://ezbets68.com</td>
                    <td>
                      <HiDownload />
                    </td>
                  </tr>
                  <tr>
                    <td>Marketing page ( promotion)</td>
                    <td>https://ezbets68.com</td>
                    <td>
                      <HiDownload />
                    </td>
                  </tr>
                  <tr>
                    <td>Marketing page ( promotion)</td>
                    <td>https://ezbets68.com</td>
                    <td>
                      <HiDownload />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Tab>

          {/*******************Capital Percentage *************/}
          <Tab eventKey="capitalpercentage" title="Capital percentage">
            <CapitalPercentage />
          </Tab>
          {/***********************Game Settings******************* */}
          <Tab eventKey="gamesettings" title="Game settings">
            <Row className="mx-0">
              <Col className={`${styles.font18} p-2 mx-1 border-0`}>
                <MUIDataTable title=" " columns={columns} data={data} />
              </Col>
            </Row>
            <Row className="mx-0 my-2">
              <Col className={` ${styles.rounded2} py-2 text-center`}>
                <Button className={` ${styles.font17} mx-2 mb-1 bg-secondary`}>Back</Button>
                <Button className={`${styles.font17} ${styles.gradientBlue} mb-1 px-5`}>Next</Button>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

agentInfo.auth = true;
export default agentInfo;

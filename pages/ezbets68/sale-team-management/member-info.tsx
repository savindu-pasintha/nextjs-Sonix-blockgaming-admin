import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../common.module.css';
import { Row, Col } from 'react-bootstrap';
import DetailView from '../../../components/detail-view';

const memberData: Array<any> = [
  { label: 'Member account', value: 'dung35cp' },
  { label: 'Registration date', value: '2021-20-08 20: 09: 03' },
  { label: 'Register IP address', value: '145.879.978' },
  { label: 'VIP level', value: 'VIP 0 ' },
  { label: 'Online/ Offline', value: 'Offline' },
  { label: 'Time of last logins', value: '2021-20-08 20: 09: 0' },
  { label: 'IP address', value: '145.879.978' },
  { label: 'Label name', value: 'Same IP, eAKO' },
  { label: 'Group level', value: 'Default' },
];

const memberData2: Array<any> = [
  { label: 'Name', value: 'dung35cp' },
  { label: 'Email', value: '' },
  { label: 'Address', value: '' },
  { label: 'pic 1', value: '' },
  { label: 'Country', value: '' },
  { label: 'Birthday', value: '' },
  { label: 'Phone number', value: '84 944036929' },
  { label: 'Birthday', value: '' },
  { label: 'City', value: '' },
  { label: 'PIC 2', value: '' },
];

const memberInfo = () => {
  return (
    <>
      <div className="bg-light shadow pb-5">
        <div className={`${styles.headerDiv} d-flex`}>
          <Row className="col-12 mx-0">
            <Col className="px-5 pb-5 col-12 text-center">
              <span
                className={` ${styles.font18} ${styles.fw700} ${styles.fontBlue} font-weight-bold bg-light text-center px-5 py-2 font-blue  top-0 rounded `}
              >
                Member information
              </span>
            </Col>
          </Row>
        </div>

        {/******************Section 1************ */}
        <div className={` ${styles.mainHeading} ${styles.font17} ${styles.fw600} mt-2 text-center text-light p-2`}>
          <label className="font-18">Registration information</label>
        </div>
        <div className={`px-3 mb-5 ${styles.fontBlue} ${styles.fw500} ${styles.font17}`}>
          <DetailView data={memberData}></DetailView>
        </div>
        {/********************Section 2 *********************** */}
        <div
          className={` ${styles.mainHeading} ${styles.mainHeading} ${styles.font17} ${styles.fw600} mt-4 text-center text-light p-2`}
        >
          <label className="font-18">Personal information</label>
        </div>

        <div className={`px-3 mb-5 ${styles.fontBlue} ${styles.fw500} ${styles.font17}`}>
          <DetailView data={memberData2}></DetailView>
        </div>
      </div>
    </>
  );
};

memberInfo.auth=true;
export default memberInfo;

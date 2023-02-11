import React from 'react';
import styles from '../../common.module.css';
import { Row, Col, Button } from 'react-bootstrap';
import FormSelect from '../../../../components/form-field/select';
import FormText from '../../../../components/form-field/text';
import {useStoreActions} from '../../../../store/hooks';
import {AgentInfoRoute} from '../../../../layout/route';

const formselect1 = [
  {
    label: 'Streamline agent level:',
    option: (
      <>
        <option>SSMA</option>
        <option>SMA</option>
        <option>MA</option>
      </>
    ),
  },
  {
    label: 'Streamline agent Id:',
    option: (
      <>
        <option>EZBets68</option>
        <option>EZBets68</option>
        <option>EZBets68</option>
      </>
    ),
  },
  {
    label: 'ID Member: ',
    option: (
      <>
        <option>Default</option>
        <option>Default</option>
        <option>Default </option>
      </>
    ),
  },
  {
    label: 'Currency: ',
    option: (
      <>
        <option>VND</option>
        <option>VND</option>
        <option>VND</option>
      </>
    ),
  },
];
const formtext1 = [
  { label: 'Password :', placeholder: '', name: '' },
  { label: 'Confirm password :', placeholder: '', name: '' },
  { label: 'Phone number :', placeholder: '', name: '' },
  { label: 'Note :', placeholder: '', name: '' },
  { label: 'Real name :', placeholder: '', name: '' },
  { label: 'Member account:', placeholder: '', name: '' },
];

const createMember = () => {
  const {setRedirect} = useStoreActions(actions => actions.appStore);

  return (
    <>
      <div className="mb-3 shadow pb-5 bg-light">
        <div className={`${styles.headerDiv} d-flex`}>
          <Row className="col-12 mx-0">
            <Col className="px-5 pb-4 col-12 text-center">
              <span
                className={` ${styles.font16} ${styles.fw700} font-weight-bold bg-light text-center px-3 py-1 font-blue  top-0 rounded `}
              >
                Create a new member account
              </span>
            </Col>
          </Row>
        </div>
        <Row className="text-center">
          <span className={`${styles.gradientBlueText} py-3`}>Basic information</span>
        </Row>

        <div className="form-check form-check-inline mx-2">
        <a href="/ezbets68/sale-team-management/agent-group/create-agent"><input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label text-dark">Agent</label></a>
        </div>
        <div className="form-check form-check-inline">
          <a href="/ezbets68/sale-team-management/agent-group/create-member">
            <input
              className="form-check-input" defaultChecked
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label text-dark">Member</label>
          </a>
        </div>

        <Row className="py-2 mx-0 d-flex justify-content-between">
          <FormSelect data={formselect1}></FormSelect>
          <FormText data={formtext1}></FormText>

          <Col className={`${styles.filterdiv} px-0`}></Col>
          <Col className={`${styles.filterdiv} px-0`}></Col>
        </Row>

        <Row className="mx-0 my-2">
          <Col className={`${styles.font17} ${styles.rounded2} py-2 text-center`}>
            <Button className={` ${styles.font17} mx-1 mb-1 bg-secondary px-3`}>Cancel</Button>
          
            <Button  onClick={() => { setRedirect(AgentInfoRoute.path);}} className={` ${styles.font17}  ${styles.gradientBlue} mx-1 mb-1 px-5`}>Next</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

createMember.auth=true;
export default createMember;

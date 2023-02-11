import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { Actions } from '@paljs/ui/Actions';
import { LayoutHeader } from '@paljs/ui/Layout';
import { Button } from '@paljs/ui/Button';
import { BsFillCircleFill } from 'react-icons/bs';
import { FormControl, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import styles from '../pages/ezbets68/common.module.css';
import { cleanStore, redirectLogin } from '../utils/functions';
import { useStoreActions, useStoreState } from '../store/hooks';
import { ProfileRoute } from "../layout/route";
import moment from 'moment';
import Password from '../pages/ezbets68/user/password';

// const HeaderStyle = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   ${breakpointDown('sm')`
//     .right{
//       display: none;
//     }
//   `}
//   .right > div {
//     height: auto;
//     display: flex;
//     align-content: center;
//   }

//   .left {
//     display: flex;
//     align-items: center;
//     .github {
//       font-size: 18px;
//       margin-right: 5px;
//     }
//   }
// `;

// const Label = styled.span`
//   display: flex;
//   align-items: center;
// `;

// const SelectStyled = styled(Select)`
//   min-width: 150px;
// `;
interface HeaderProps {
  toggleSidebar: () => void;
  theme: {
    set: (value: DefaultTheme['name']) => void;
    value: DefaultTheme['name'];
  };
  changeDir: () => void;
  dir: 'rtl' | 'ltr';
}

const Header: React.FC<HeaderProps> = (props) => {
  // const router = useRouter();
  const { currentBrand } = useStoreState(state => state.appStore);
  const { setRedirect, setCurrentRoute } = useStoreActions(actions => actions.appStore);
  const LayoutClassName = {
    className: styles.layoutHeader
  };
  const [ setModalShow] = useState(false);


  return (
    <LayoutHeader {...LayoutClassName}>

      <Row className={`${styles.font17} col-12 align-items-center ${styles.navRow}`}>
        <Col className="col-md-8">
          <Row className={` align-items-center `}>
            <Col className={`col-1`}>
              <Actions
                size="Small"
                actions={[
                  {
                    icon: { name: 'menu-2-outline' },
                    url: {
                      onClick: props.toggleSidebar,
                    },
                  },
                ]}
              />
            </Col>
            <Col className={`col-2 ${styles.navDisplayNone} p-0 justify-content-center d-flex align-items-center`}>
              <BsFillCircleFill className={`text-warning ${styles.navDisplayNone}`} /> &nbsp;
              <span className={`${styles.navDisplayNone} mx-1`}>Happy Day</span>
            </Col>
            <Col className={`col-2 text-center ${styles.navDisplayNone}`}>
              <span>{moment().format('hh:mm:ss A')}</span>
            </Col>
            <Col className={`col-3 ${styles.navDisplayNone} p-0`}>
              <span>{moment().format('dddd, D MMMM, YYYY')}</span>
            </Col>
            <Col className={`col-4 position-relative p-0 ${styles.navDisplayNone}`}>
              <>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search for anything here.."
                    className=" border-0 col-6 shadow-sm m-0 bg-white rounded "
                    aria-label="Search"
                  />
                </Form>
                <BiSearch className={`h5 m-0 position-absolute ${styles.searchIcon} `} />
              </>
            </Col>
          </Row>
        </Col>
        <Col className={`col-md-4 d-flex align-items-center justify-content-end`}>
          {/* <FaUserCircle onClick={() => { setRedirect(ProfileRoute.path); setCurrentRoute(ProfileRoute); }} className={`${styles.font25} ${styles.navDisplayShow} px-1`} />

          <RiLockPasswordFill onClick={() => { setRedirect(UserPasswordRoute.path); setCurrentRoute(UserPasswordRoute); }} className={`${styles.font25} ${styles.navDisplayShow} px-1`} /> */}
          <div id="google_translate_element" className='col-3'> </div>

          <DropdownButton
           variant="outline-secondary"
            title={<FaUserCircle className={`${styles.font25}`} />}
            className={`${styles.userButton} ${styles.navDisplayShow}  px-1 bg-transparent`}
          >
            <Dropdown.Item>
              <Button onClick={() => { setRedirect(ProfileRoute.path); }}>
                Account Information
              </Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Password/>
            </Dropdown.Item>
          </DropdownButton>

          <Button onClick={() => location.href = '/ezbets68/auth/login'} className="bg-white d-flex align-items-center border-0 shadow-sm m-0 text-dark rounded ">
            <FiLogOut className={`${styles.font18} ${styles.navDisplayShow} px-1`} />
            Logout
          </Button>
        </Col>
      </Row>


    </LayoutHeader>
  );
};
export default Header;

import EmptyLayout from '../../../layout/empty-layout';
import {
  Link,
} from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Row, Col, Form } from 'react-bootstrap';
import styles from './login.module.css'

const ForgotPassword = () => {
  const useRoute = useRouter();
  const { brand } = useRoute.query;
  return (
    <Row>
      <div className={` ${styles.homeRightText} col-9 col-lg-8 d-flex flex-column align-items-center pt-3`}>
        <Image src="/images/logo.png" height={79} width={176} />

        <div className={`${styles.login_form_div} mt-3 col-12`}>
          <Form className={`${styles.commonBorder} ${styles.login_form} p-4`} >
            <Form.Group className="mb-3">
              <Form.Label className="mb-0">Email</Form.Label>
              <Form.Control
                className={`bg-transparent ${styles.commonBorder}`}
                id='fo rgot-password_email' type={'email'} required={true}
              />
            </Form.Group>

            <div className={`${styles.forgotText} row no-gutters mt-1`}>
              <Link href={`/${brand}/auth/login`} className='text-xs my-2'>Login</Link>
            </div>
            {/* <div className={`${styles.loginBtn} row justify-content-center no-gutters mt-4`}>
              <FormControl>
                <Button className={`${styles.basic_button} col-12`} variant={'contained'} startIcon={<SendOutlined />}>Send reset link</Button>
              </FormControl>
            </div> */}

          </Form>
        </div>
        <p className="pt-4 text-center text-light">@ 2022, Made with BlockGaming Company️ </p>
      </div>
    </Row>
  );
}

export default ForgotPassword;

ForgotPassword.getLayout = (page) => {
  return (
    <EmptyLayout>
      <Row className={`${styles.mainRow} m-0`}>
        <Col
          xs={0} lg={7} className={`text-light px-0 ${styles.homeLeft} g-0`}
        >
          <div className={`${styles.homeLeftText} d-flex flex-column align-items-center`}>
            <h2>Welcome!</h2>
            <p>Betting Rules + Bets Offered</p>
            <img src="/images/home_1.png" className="pt-5" />
          </div>
        </Col>
        <Col xs={12} lg={5} className={`px-0 text-light ${styles.homeRight}  position-relative`}>{page}</Col>
      </Row>
    </EmptyLayout>
  );
}

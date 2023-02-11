import EmptyLayout from '../../../layout/empty-layout'
import React from 'react'
import styles from './login.module.css'
import Image from 'next/image'
import { Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login2 = () => {
  return (
    <div className={` ${styles.homeRightText}`}>
      <div className={`${styles.homeRightImagBox}`}>
        <img src='/images/logo.png' height={60} width={200} className={`${styles.homeRightImage}`} />
      </div>
      <div className={`${styles.login_code_form_div + ' ' + styles.commonBorder}`}>
        <form className={`${styles.login_code_form}`}>
          <div className={`${styles.inputGroupBox}`}>
            <h2 className={styles.login_code_title}>SECURITY CODE </h2>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <p className={styles.login_code_please_enter}>Please enter your 6-digit security code</p>
          </div>
          <div className={`${styles.login_code_inputGroupBox}`}>
            <label className={`${styles.label}`}>Security Code</label>
            <br />
            <div className={'row ' + styles.login_code_input_box_row}>
              <div className={'col-2 ' + styles.login_code_inputbox_div}>
                <input
                  className={`${styles.login_code_inputbox}`}
                  type='text'
                  id='first'
                  onKeyUp={e => document.getElementById('second').focus()}
                />
              </div>

              <div className={'col-2 ' + styles.login_code_inputbox_div}>
                <input
                  className={` ${styles.login_code_inputbox}`}
                  type='text'
                  id='second'
                  onKeyUp={e => {
                    const key = e.key

                    if (key == 'Backspace' || key == 'Delete') document.getElementById('first').focus()
                    else document.getElementById('third').focus()
                  }}
                />
              </div>
              <div className={'col-2 ' + styles.login_code_inputbox_div}>
                <input
                  className={` ${styles.login_code_inputbox}`}
                  type='text'
                  id='third'
                  onKeyUp={e => {
                    const key = e.key

                    if (key == 'Backspace' || key == 'Delete') document.getElementById('second').focus()
                    else document.getElementById('fourth').focus()
                  }}
                />
              </div>
              <div className={'col-2 ' + styles.login_code_inputbox_div}>
                <input
                  className={` ${styles.login_code_inputbox}`}
                  type='text'
                  id='fourth'
                  onKeyUp={e => {
                    const key = e.key

                    if (key == 'Backspace' || key == 'Delete') document.getElementById('third').focus()
                    else document.getElementById('fifth').focus()
                  }}
                />
              </div>
              <div className={'col-2 ' + styles.login_code_inputbox_div}>
                <input
                  className={` ${styles.login_code_inputbox}`}
                  type='text'
                  id='fifth'
                  onKeyUp={e => {
                    const key = e.key

                    if (key == 'Backspace' || key == 'Delete') document.getElementById('fourth').focus()
                    else document.getElementById('sixth').focus()
                  }}
                />
              </div>
              <div className={'col-2 ' + styles.login_code_inputbox_div}>
                <input
                  className={`${styles.login_code_inputbox}`}
                  type='text'
                  id='sixth'
                  onKeyUp={e => (location.href = '/ezbets68/sale-team-management/agent-group')}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <p className={`${styles.label_back_to_login}`}>
              <a href='/'>Back to Login Page</a>{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login2

Login2.getLayout = page => {
  return (
    <EmptyLayout>
      <Row className={`${styles.mainRow} m-0`}>
        <Col xs={7} lg={7} className={`px-0 ${styles.homeLeft} g-0`}>
          <div className={`${styles.homeLeftText} d-flex flex-column align-items-center`}>
            <h2 className='welcome-text'>Welcome!</h2>
            <p>Betting Rules + Bets Offered</p>
            <img src='/images/home_1.png' className='pt-5' />
          </div>
        </Col>
        <Col xs={5} lg={5} className={`px-0${styles.homeRight} position-relative`}>
          {page}
        </Col>
      </Row>
    </EmptyLayout>
  )
}

/*
<Row>
      <div className={` ${styles.homeRightText} col-9 col-lg-8 d-flex flex-column align-items-center pt-3`}>
        <Image src='/images/logo.png' height={60} width={235} />

        <div className={` ${styles.login_form_div} mt-4 col-12 rounded-lg`}>
          <Form className={`${styles.commonBorder} ${styles.login_form} p-4`}>
            <div className={` text-center`}>
              <h5 className={` ${styles.font25} my-3 `}>SECURITY CODE</h5>
              <p className={` ${styles.font17} py-4 `}>Please enter your 6-digit security code</p>
            </div>

            <p className={`pl-2 ${styles.font17} `}>Security Code</p>

            <div className={`inputs d-flex flex-row justify-content-center mt-2`}>
              <input
                className={`bg-transparent m-2 text-center text-light rounded ${styles.commonBorder}`}
                type='text'
                id='first'
                onKeyUp={() => document.getElementById('second').focus()}
              />
              <input
                className={`bg-transparent m-2 text-center text-light rounded ${styles.commonBorder}`}
                type='text'
                id='second'
                onKeyUp={e => {
                  const key = e.key

                  if (key == 'Backspace' || key == 'Delete') document.getElementById('first').focus()
                  else document.getElementById('third').focus()
                }}
              />
              <input
                className={`bg-transparent m-2 text-center text-light rounded ${styles.commonBorder}`}
                type='text'
                id='third'
                onKeyUp={e => {
                  const key = e.key

                  if (key == 'Backspace' || key == 'Delete') document.getElementById('second').focus()
                  else document.getElementById('fourth').focus()
                }}
              />
              <input
                className={`bg-transparent m-2 text-center text-light rounded ${styles.commonBorder}`}
                type='text'
                id='fourth'
                onKeyUp={e => {
                  const key = e.key

                  if (key == 'Backspace' || key == 'Delete') document.getElementById('third').focus()
                  else document.getElementById('fifth').focus()
                }}
              />
              <input
                className={`bg-transparent m-2 text-center text-light rounded ${styles.commonBorder}`}
                type='text'
                id='fifth'
                onKeyUp={e => {
                  const key = e.key

                  if (key == 'Backspace' || key == 'Delete') document.getElementById('fourth').focus()
                  else document.getElementById('sixth').focus()
                }}
              />
              <input
                className={`bg-transparent m-2 text-center text-light rounded ${styles.commonBorder}`}
                type='text'
                id='sixth'
                onKeyUp={() => (location.href = '/ezbets68/sale-team-management/agent-group')}
              />
            </div>
            <br />
            <p className='text-primary pl-2 pt-2 mb-2'>
              <a href='/' className={`font-weight-bold font-17 text-decoration-none`}>
                Back to Login Page
              </a>{' '}
            </p>
          </Form>
        </div>
        <p className={`pt-4 text-center text-light`}>@ 2022, Made with BlockGaming Company️ </p>
      </div>
    </Row>
 */

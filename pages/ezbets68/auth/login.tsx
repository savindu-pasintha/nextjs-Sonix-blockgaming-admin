import EmptyLayout from '../../../layout/empty-layout'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from '../../../store/hooks'
import { IAuthRequest } from '../../../store/stores/auth.store'
import { toast } from 'react-toastify'
import { SalesTeamRoute } from '../../../layout/route'
import { isAuthenticated } from '../../../utils/functions'
import React from 'react'
import styles from './login.module.css'
import Image from 'next/image'
import { Row, Col, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
  const [authForm, setAuthForm] = useState<IAuthRequest>({
    username: '',
    password: '',
    brand: '',
  })
  // const [loading, setLoading] = useState(false)
  const { currentBrand } = useStoreState(state => state.appStore)
  const { authLoginThunk } = useStoreActions(actions => actions.authStore)
  const { setCurrentRoute, setRedirect } = useStoreActions(actions => actions.appStore)
  const updateAuthForm = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    if (['username', 'password', 'language'].indexOf(target.name) >= 0) {
      setAuthForm({ ...authForm, [target.name]: target.value })
    }
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const authRequest: IAuthRequest = {
      username: authForm.username,
      password: authForm.password,
      brand: authForm.brand,
    }
    // setLoading(true)
    const success = await authLoginThunk(authRequest)
    // setLoading(false)
    if (success) {
      toast('Login successful', { type: 'success' })
      setCurrentRoute(SalesTeamRoute)
      setRedirect(`${SalesTeamRoute.path}`)
    } else {
      toast('Error while login, check your username & password, please!', { type: 'error' })
    }
  }
  useEffect(() => {
    if (currentBrand) {
      setAuthForm({ ...authForm, brand: currentBrand })

      if (isAuthenticated()) {
        setCurrentRoute(SalesTeamRoute)
        setRedirect(`${SalesTeamRoute.path}`)
      }
    }
  }, [currentBrand])
  return (
    <div className={` ${styles.homeRightText}`}>
      <div className={`${styles.homeRightImagBox}`}>
        <img src='/images/logo.png' height={60} width={200} className={`${styles.homeRightImage}`} />
      </div>
      <div className={`${styles.login_form_div}`}>
        <form className={`${styles.commonBorder} ${styles.login_form}`} onSubmit={handleSubmit}>
          <div className={`${styles.inputGroupBox}`}>
            <label className={`${styles.label}`}>Language</label>
            <br />
            <div className={`${styles.inputBox + ' ' + styles.commonBorder}`}>
              <input
                className={`${styles.input}`}
                placeholder='English'
                type='text'
                name='language'
                id='login_language'
                onChange={updateAuthForm}
              />
            </div>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <label className={`${styles.label}`}>Username</label>
            <br />
            <div className={`${styles.inputBox + ' ' + styles.commonBorder}`}>
              <input
                className={`${styles.input}`}
                type='text'
                name='username'
                id='login_username'
                placeholder='PWL091SUB01'
                onChange={updateAuthForm}
              />
            </div>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <label className={`${styles.label}`}>Password</label>
            <br />
            <div className={`${styles.inputBox + ' ' + styles.commonBorder}`}>
              <input
                className={`${styles.input}`}
                type='password'
                name='password'
                id='login_password'
                placeholder='*****************'
                onChange={updateAuthForm}
              />
            </div>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <label className={`${styles.label}`}>Validation Code</label>
            <br />
            <div className={`${styles.validationCodeBox}`}>
              <h1 className={`${styles.validationCode}`}>1152</h1>
            </div>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <div className={`${styles.inputBox + ' ' + styles.commonBorder}`}>
              <input className={`${styles.input}`} type='text' />
            </div>
            <div className={`${styles.inputBoxSwitch}`}>
              <label className={`${styles.switch}`}>
                <input type='checkbox' />
                <span className={`${styles.slider + ' ' + styles.round} `}></span>
              </label>
              <span className={`${styles.span}`}> Remember me</span>

              <span className={`${styles.captchaText}`}>Enter the captcha above</span>
            </div>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <div className={`${styles.inputBox}`}>
              <button className={`${styles.basic_button} col-12`} type='button' onClick={e => (location.href = '/ezbets68/auth/loginCode')}>
                Login
              </button>
            </div>
          </div>
          <div className={`${styles.inputGroupBox}`}>
            <p className={`${styles.haveAccount}`}>
              Not have an account? <span className={`${styles.span}`}>Register</span>
            </p>
          </div>
        </form>
        <div className={`${styles.copyRightTextBox}`}>
          <p className={`${styles.copyRightText}`}>@ 2022, Made with BlockGaming Company️ </p>
        </div>
      </div>
    </div>
  )
}

export default Login

Login.getLayout = page => {
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

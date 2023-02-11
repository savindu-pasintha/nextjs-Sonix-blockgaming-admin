import React, { ChangeEvent, useState, useEffect } from 'react'
import styles from '../../common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import { CreateAgent } from '../../../../store/interfaces/agent.interface'
import { useStoreActions, useStoreState } from '../../../../store/hooks'
import { toast } from 'react-toastify'
import { SalesTeamRoute } from '../../../../layout/route'
import { useRouter } from 'next/router'

const createAgent = () => {
  const { createAgent } = useStoreActions(actions => actions.agentStore)
  const { currentBrand } = useStoreState(state => state.appStore)
  const router = useRouter()
  const formEmpty = {
    userName: '',
    email: '',
    password: '',
    confirm_password: '',
    fullName: '',
    phone: '',
    brandCode: currentBrand ? currentBrand : 'sonicxgame',
  }

  const [agentForm, setAgentForm] = useState<CreateAgent>(formEmpty)

  const handleUpdateData = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    if (['userName', 'email', 'phone', 'fullName', 'password', 'confirm_password'].indexOf(target.name) >= 0) {
      setAgentForm({ ...agentForm, [target.name]: target.value })
    }
  }

  useEffect(() => {
    if (currentBrand) {
      setAgentForm({ ...agentForm, brandCode: currentBrand })
    }
  }, [currentBrand])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!agentForm.userName) {
      toast('UserName is required', { type: 'error' })
      return
    }

    if (!agentForm.email) {
      toast('Email is required', { type: 'error' })
      return
    }

    if (!agentForm.fullName) {
      toast('FullName is required', { type: 'error' })
      return
    }

    if (!agentForm.phone) {
      toast('Phone is required', { type: 'error' })
      return
    }

    if (!agentForm.password) {
      toast('Password is required', { type: 'error' })
      return
    }

    if (!agentForm.confirm_password) {
      toast('Confirm password is required', { type: 'error' })
      return
    }

    if (agentForm.password !== agentForm.confirm_password) {
      toast('Password and Confirm password should be matched', { type: 'error' })
      return
    }

    const success = await createAgent(agentForm)
    // setLoading(false)
    if (success) {
      setAgentForm(formEmpty)
      toast('Agent created successfully', { type: 'success' })
      router.push(`${SalesTeamRoute.path}`)
    } else {
      toast('Error while creating agent, check your form data, please!', { type: 'error' })
    }
  }

  return (
    <>
      <div className='mb-3  pb-5' style={{ backgroundColor: 'none' }}>
        <div className={`d-flex pb-2`}>
          <Row className={`col-12 mx-0 ${styles.player_report_row}`}>
            <Col className='px-5 pb-4 col-12 text-center '>
              <div className={`${styles.player_report_text_container} `}>
                <span className={`${styles.player_report_text} `}> Create a new agent account</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`mx-0  text-center ${styles.player_report_row_background}`}>
          <span className={`${styles.player_report_search_text} p-2`}>Basic information</span>
        </Row>

        <Row className='py-2 mx-0 d-flex justify-content-between'>
          <Col
            className={`form-group ${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-12 py-2 `}
          >
            <Row>
              <Col className='col-md-4 col-12'>
                <label className={`${styles.fw700}`}>{'UserName'} </label>
              </Col>
              <Col className='col-md-8 col-12'>
                <input
                  value={agentForm.userName}
                  className={`form-control ${styles.fw700}`}
                  type='text'
                  name={'userName'}
                  onChange={handleUpdateData}
                />
              </Col>
            </Row>
          </Col>
          <Col
            className={`form-group ${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-12 py-2 `}
          >
            <Row>
              <Col className='col-md-4 col-12'>
                <label className={`${styles.fw700}`}>{'Email'} </label>
              </Col>
              <Col className='col-md-8 col-12'>
                <input
                  value={agentForm.email}
                  className={`form-control ${styles.fw700}`}
                  type='email'
                  name={'email'}
                  onChange={handleUpdateData}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='py-2 mx-0 d-flex justify-content-between'>
          <Col
            className={`form-group ${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-12 py-2 `}
          >
            <Row>
              <Col className='col-md-4 col-12'>
                <label className={`${styles.fw700}`}>{'Full Name'} </label>
              </Col>
              <Col className='col-md-8 col-12'>
                <input
                  value={agentForm.fullName}
                  className={`form-control ${styles.fw700}`}
                  type='text'
                  name={'fullName'}
                  onChange={handleUpdateData}
                />
              </Col>
            </Row>
          </Col>
          <Col
            className={`form-group ${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-12 py-2 `}
          >
            <Row>
              <Col className='col-md-4 col-12'>
                <label className={`${styles.fw700}`}>{'Phone'} </label>
              </Col>
              <Col className='col-md-8 col-12'>
                <input
                  value={agentForm.phone}
                  className={`form-control ${styles.fw700}`}
                  type='text'
                  name={'phone'}
                  onChange={handleUpdateData}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='py-2 mx-0 d-flex justify-content-between'>
          <Col
            className={`form-group ${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-12 py-2 `}
          >
            <Row>
              <Col className='col-md-4 col-12'>
                <label className={`${styles.fw700}`}>{'Password'} </label>
              </Col>
              <Col className='col-md-8 col-12'>
                <input
                  value={agentForm.password}
                  className={`form-control ${styles.fw700}`}
                  type='password'
                  name={'password'}
                  onChange={handleUpdateData}
                />
              </Col>
            </Row>
          </Col>
          <Col
            className={`form-group ${styles.font17} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-md-5 col-12 py-2 `}
          >
            <Row>
              <Col className='col-md-4 col-12'>
                <label className={`${styles.fw700}`}>{'Confirm Password'} </label>
              </Col>
              <Col className='col-md-8 col-12'>
                <input
                  value={agentForm.confirm_password}
                  className={`form-control ${styles.fw700}`}
                  type='password'
                  name={'confirm_password'}
                  onChange={handleUpdateData}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <Col className={`${styles.font17} ${styles.rounded2} py-2 text-center`}>
            <Button
              style={{ backgroundColor: '#BDBDBD' }}
              className={` mx-2 mb-1`}
              onClick={() => {
                setAgentForm(formEmpty)
              }}
            >
              Reset
            </Button>
            <Button className={` ${styles.player_list_search_button}  ${styles.gradientBlue} mb-1 px-5`} onClick={handleSubmit}>
              CREATE
            </Button>
          </Col>
        </Row>
      </div>
    </>
  )
}

createAgent.auth = true
export default createAgent

import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import CreateAccountButton from '../../../components/common/CreateAccountButton'
import Game from '../../../components/newSH/Game'
import GameProvider from '../../../components/newSH/GameProvider'
import LiveCasino from '../../../components/newSH/LiveCasino'
import Sport from '../../../components/newSH/Sport'
import ThirdPartySport from '../../../components/newSH/ThirdPartySport'
import PageHeaderTitle from '../../../components/PageHeaderTitle/PageHeaderTitle'
import PageSectionHead from '../../../components/PageSectionHead/PageSectionHead'
import PageSectionHeaderTabs from '../../../components/PageSectionHeaderTabs/PageSectionHeaderTabs'
import PasswordPolicy from '../../../components/passwordPolicy/PasswordPolicy'
import CompanyLogo from '../../../layout/CompanyLogo'
import styles from '../common.module.css'

const newSH = () => {
  const [tabName, setTabName] = useState('sport')
  return (
    <>
      <CompanyLogo logo_src={''} />
      <div className='mb-3 pb-5'>
        <PageHeaderTitle title={'New SH'} />

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <PageSectionHead title='User Infromation' />
          <Col className={`${styles.font18} p-0 mx-0 border-0`}>
            <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
              <label className={'col-2  ' + styles.new_sh_label}>Account Type:</label>
              <select className='col-2 '>
                <option>Share Holder</option>
              </select>
            </div>
            <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
              <label className={'col-2  ' + styles.new_sh_label}>Username:</label>
              <input type='text' className='col-2 ' placeholder='Wx665sspro' />
              <span className={'col-2  ' + styles.new_sh_span}>*Required</span>
              <label className={'col-2  ' + styles.new_sh_label}>Email:</label>
              <input type='email' className='col-2 ' placeholder='' />
            </div>
            <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
              <label className={'col-2  ' + styles.new_sh_label}>Password:</label>
              <input type='password' className='col-2 ' placeholder='*********' />
              <span className={'col-2  ' + styles.new_sh_span}>*Required</span>
              <label className={'col-2  ' + styles.new_sh_label}>Currency:</label>
              <select className='col-2 '>
                <option>SDG</option>
              </select>
            </div>
            <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
              <label className={'col-2  ' + styles.new_sh_label}>First Name:</label>
              <input type='text' className='col-2 ' placeholder='' />
              <div className='col-2'></div>
              <label className={'col-2  ' + styles.new_sh_label}>Phone:</label>
              <input type='tel' className='col-2 ' placeholder='' />
            </div>
            <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
              <label className={'col-2  ' + styles.new_sh_label}>Last Name:</label>
              <input type='text' className='col-2 ' placeholder='' />
            </div>
          </Col>
        </Row>

        <PageSectionHeaderTabs
          title='Product :'
          tabNames={['Sport', 'Game', 'Live Casino', 'Game Provider', 'Third Party Sports']}
          handleChangeTabs={value => setTabName(value)}
        />
        <>
          {tabName && tabName == 'Sport' ? (
            <Sport />
          ) : tabName && tabName == 'Game' ? (
            <Game />
          ) : tabName && tabName == 'Live Casino' ? (
            <LiveCasino />
          ) : tabName && tabName == 'Game Provider' ? (
            <GameProvider />
          ) : tabName && tabName == 'Third Party Sports' ? (
            <ThirdPartySport />
          ) : (
            <Sport />
          )}
        </>
        <CreateAccountButton title='Create Account' />
        <PasswordPolicy />
      </div>
    </>
  )
}

newSH.auth = true
export default newSH

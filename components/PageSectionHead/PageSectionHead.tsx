import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../pages/ezbets68/common.module.css'
const PageSectionHead = ({ title = 'Title' }) => {
  return (
    <div className={`${styles.player_report_table_mainHeading} text-center p-2`}>
      <label className={`${styles.font18} text-light ${styles.fw700}`}>{title}</label>
    </div>
  )
}

export default PageSectionHead

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../pages/ezbets68/common.module.css'
const PageHeaderTitle = ({ title = 'Title' }) => {
  return (
    <div className={`d-flex pb-2`}>
      <Row className={`col-12 mx-0 ${styles.player_report_row}`}>
        <Col className='px-5 pb-4 col-12 text-center '>
          <div className={`${styles.player_report_text_container} `}>
            <span className={`${styles.player_report_text} `}> {title}</span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PageHeaderTitle

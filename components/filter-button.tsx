import React from 'react'
import styles from '../pages/ezbets68/common.module.css'
import { Row, Col, Button } from 'react-bootstrap'

interface FormButtonProps {
  data: Array<any>
  label: string
}
const FormButton: React.FC<FormButtonProps> = ({ data, label }) => {
  return (
    <>
      <Row className={`${styles.buttonDiv} ${styles.rounded2} d-flex align-items-center  mx-0 px-4 py-3`}>
        <Col className={`col-auto px-1 my-3 `}>
          <label htmlFor='' className={` ${styles.all_transaction_type_text}`}>
            {label}
          </label>
        </Col>

        <Col className={`col-10 px-1 py-1 `}>
          {data.length &&
            data.map((d, i) => (
              <Button
                key={i}
                className={` mb-1 mx-1 ${styles.betting_history_filter_buttons} text-capitalize  border px-2 py-1 bg-transparent`}
              >
                {d?.text}
              </Button>
            ))}
        </Col>
      </Row>
    </>
  )
}
export default FormButton

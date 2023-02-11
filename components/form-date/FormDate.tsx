import React from 'react'
import styles from '../../pages/ezbets68/common.module.css'
import { Col } from 'react-bootstrap'

interface FormDateProps {
  data: Array<any>
}
const FormDate: React.FC<FormDateProps> = ({ data }) => {
  return (
    <>
      {data.length &&
        data.map((d, i) => (
          <Col
            key={i}
            className={`${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-3 col-md-6 col-12 py-2`}
          >
            <label className={`${styles.form_select_lable} col-6`}>{d.label} </label>
            <input type='date' className={`${styles.commonSelect} py-1 col-6 px-3`} placeholder='dd/mm/yy' />
          </Col>
        ))}
    </>
  )
}
export default FormDate

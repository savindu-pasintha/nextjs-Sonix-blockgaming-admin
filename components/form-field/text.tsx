import React from 'react'
import styles from '../../pages/ezbets68/common.module.css'
import { Col } from 'react-bootstrap'

interface FormTextProps {
  data: Array<any>
}
const FormText: React.FC<FormTextProps> = ({ data }) => {
  return (
    <>
      {data.length &&
        data.map((d, i) => (
          <Col
            key={i}
            className={`${styles.font17} ${styles.filterdiv} ${styles.seagreenBg} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-3 col-md-6 col-12 py-2 `}
          >
            <label className={`${styles.form_select_lable} col-6`}>{d.label} </label>
            <input className={`${styles.fw700} col-6`} type='text' name={d.name} id='' placeholder={d.placeholder} />
          </Col>
        ))}
    </>
  )
}
export default FormText

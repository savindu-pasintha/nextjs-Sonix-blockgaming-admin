import React from 'react'
import styles from '../../pages/ezbets68/common.module.css'
import { BiCopy } from 'react-icons/bi'
export const PositionTakingTableWithCopy = ({ title = 'Type:' }) => {
  return (
    <>
      {[[1], [2], [3]].map((row, ind) => (
        <div className='row'>
          {row.map((item, indd) => (
            <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
              <label className={'col-1   ' + styles.sport_table_header_label}>{title} </label>
              <select className='col-2 '>
                <option>0</option>
              </select>
              <label className={'col-1   ' + styles.sport_table_header_label}></label>
              <select className='col-2 mx-0'>
                <option>0</option>
              </select>
              <label className={'col-1   ' + styles.sport_table_header_label}></label>
              <label className={'col-1   ' + styles.sport_table_header_label}>100</label>
              <select className='col-2 '>
                <option>0</option>
              </select>
              <label className={'col-1 text-center ' + styles.sport_table_header_label}></label>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export const PositionTakingTableWithOutCopy = ({ title = 'Type:' }) => {
  return (
    <>
      {[[1], [2], [3]].map((row, ind) => (
        <div className='row'>
          {row.map((item, indd) => (
            <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
              <label className={'col   ' + styles.sport_table_header_label}>{title}</label>
              <select className='col '>
                <option>0</option>
              </select>
              <select className='col '>
                <option>0</option>
              </select>
              <label className={'col  ' + styles.sport_table_header_label}>100</label>
              <select className='col '>
                <option>0</option>
              </select>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export const PositionTakingTableHeaderWithCopy = () => {
  return (
    <div className='row mx-2 my-2 py-2'>
      <label className={'col-1 ' + styles.sport_table_header_label}>Type</label>
      <label className={'col-2 ' + styles.sport_table_header_label}>Min PT</label>
      <label className={'col-1 ' + styles.sport_table_header_label}>
        <BiCopy className={`${styles.sport_copy_icon_bg}`} />
        copy
      </label>
      <label className={'col-2 ' + styles.sport_table_header_label}>Forced PT</label>
      <label className={'col-1 ' + styles.sport_table_header_label}>
        {' '}
        <BiCopy className={`${styles.sport_copy_icon_bg}`} /> copy
      </label>
      <label className={'col-1 ' + styles.sport_table_header_label}>Total</label>
      <label className={'col-2 ' + styles.sport_table_header_label}>Take Remaining</label>
      <label className={'col-1 ' + styles.sport_table_header_label}>
        {' '}
        <BiCopy className={`${styles.sport_copy_icon_bg}`} /> copy
      </label>
    </div>
  )
}

export const PositionTakingTableHeaderWithOutCopy = () => {
  return (
    <div className='row mx-2 my-2 py-2'>
      <label className={'col ' + styles.sport_table_header_label}>Type</label>
      <label className={'col ' + styles.sport_table_header_label}>Min PT</label>
      <label className={'col ' + styles.sport_table_header_label}>Forced PT</label>
      <label className={'col ' + styles.sport_table_header_label}>Total</label>
      <label className={'col ' + styles.sport_table_header_label}>Take Remaining</label>
    </div>
  )
}

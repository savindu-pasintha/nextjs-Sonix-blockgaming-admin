import React from 'react'
import PageSectionHead from '../PageSectionHead/PageSectionHead'
import styles from '../../pages/ezbets68/common.module.css'
import { BiCopy } from 'react-icons/bi'
import {
  PositionTakingTableHeaderWithCopy,
  PositionTakingTableHeaderWithOutCopy,
  PositionTakingTableWithCopy,
} from './PositionTakingTables'

const ThirdPartySport = () => {
  return (
    <>
      <div>
        <PageSectionHead title='Third Party Sport' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Sports:</label>
          <select className='col-2 '>
            <option>Saba Sports</option>
          </select>
        </div>
      </div>
      <div>
        <PageSectionHead title='Commision' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Group A:</label>
          <input type='text' className='col-2 ' placeholder='' />
          <span className={'col-2  ' + styles.new_sh_span}>% Max: 10</span>

          <label className={'col-2 ' + styles.new_sh_label}>Other Commt:</label>
          <input type='text' className='col-2 ' placeholder='10' />
          <span className={'col-2  ' + styles.new_sh_span}>% Max: 10</span>
        </div>
        <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Group B:</label>
          <input type='text' className='col-2 ' placeholder='' />
          <span className={'col-2  ' + styles.new_sh_span}>% Max: 10</span>

          <label className={'col-2 ' + styles.new_sh_label}>1X2 Comm:</label>
          <input type='text' className='col-2 ' placeholder='10' />
          <span className={'col-2  ' + styles.new_sh_span}>% Max: 10</span>
        </div>
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Group C:</label>
          <input type='text' className='col-2 ' placeholder='' />
          <span className={'col-2  ' + styles.new_sh_span}>% Max: 10</span>
        </div>
      </div>
      <div>
        <PageSectionHead title='Position taking' />
        <>
          <PositionTakingTableHeaderWithCopy />
          <PositionTakingTableWithCopy title='PT1:' />
        </>
      </div>
    </>
  )
}

export default ThirdPartySport

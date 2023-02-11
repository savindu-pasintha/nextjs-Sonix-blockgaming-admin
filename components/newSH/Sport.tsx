import React from 'react'
import PageSectionHead from '../PageSectionHead/PageSectionHead'
import styles from '../../pages/ezbets68/common.module.css'
import { BiCopy } from 'react-icons/bi'
import { PositionTakingTableWithCopy } from './PositionTakingTables'
const Sport = () => {
  return (
    <>
      <div>
        <PageSectionHead title='Max Credit/Bet Setting' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Sport:</label>
          <span className={'col-2  ' + styles.new_sh_span}>Allowed</span>
          <div className='col-2'></div>
          <label className={'col-2 ' + styles.new_sh_label}>Min Bet:</label>
          <span className={'col-2  ' + styles.new_sh_span}>Min: 1</span>
        </div>
        <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Credit:</label>
          <input type='text' className='col-2 ' placeholder='' />
          <span className={'col-2  ' + styles.new_sh_span}>Max: 1,80.000.00</span>

          <label className={'col-2 ' + styles.new_sh_label}>Max Bet:</label>
          <input type='text' className='col-2 ' placeholder='1,80.000.00' />
          <span className={'col-2  ' + styles.new_sh_span}>Max: 1,80.000.00</span>
        </div>
        <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Password:</label>
          <input type='password' className='col-2 ' placeholder='***********' />
          <span className={'col-2  ' + styles.new_sh_span}>Max: 1,80.000.00</span>

          <label className={'col-2 ' + styles.new_sh_label}>Max Per Match:</label>
          <input type='text' className='col-2 ' placeholder='1,80.000.00' />
          <span className={'col-2  ' + styles.new_sh_span}>Max: 20.000.00</span>
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
          <PositionTakingTableWithCopy />
          <PositionTakingTableWithCopy title={'PT1:'} />
        </>
      </div>
    </>
  )
}

export default Sport

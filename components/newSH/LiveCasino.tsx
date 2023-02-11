import React from 'react'
import PageSectionHead from '../PageSectionHead/PageSectionHead'
import styles from '../../pages/ezbets68/common.module.css'
import { BiCopy } from 'react-icons/bi'
import { PositionTakingTableHeaderWithOutCopy, PositionTakingTableWithOutCopy } from './PositionTakingTables'
const LiveCasino = () => {
  return (
    <>
      <div>
        <PageSectionHead title='Live Casino' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Player Max Win:</label>
          <select className='col-2 '>
            <option>Unlimited</option>
          </select>
          <span className={'col-2  ' + styles.new_sh_span}></span>
          <label className={'col-2  ' + styles.new_sh_label}>Player Max Los:</label>
          <input type='text' className='col-2 ' placeholder='' />
          <span className={'col-2  ' + styles.new_sh_span}></span>
        </div>
        <div className={`row ${styles.new_sh_row2_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Live Casino Min Bet:</label>
          <input type='text' className='col-2 ' placeholder='1 0' />
          <span className={'col-2  ' + styles.new_sh_span}>Min: 1</span>
          <label className={'col-2  ' + styles.new_sh_label}>Live Casino Min Bet:</label>
          <input type='text' className='col-2 ' placeholder='10000000' />
          <span className={'col-2  ' + styles.new_sh_span}>Max: 1000000</span>
        </div>
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Live Casino Min Bet:</label>
          <input type='text' className='col-2 ' placeholder='Yes' />
        </div>
      </div>

      <div>
        <PageSectionHead title='Table Limit' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Table Limit:</label>
          <input type='text' className='col-2 ' placeholder='1' />
          <span className={'col-6  ' + styles.new_sh_span}>Max: 4(1Low,2:Medium,3:High,4:VIP)</span>
        </div>
      </div>

      <div>
        <PageSectionHead title='Commision' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Commission:</label>
          <input type='text' className='col-2 ' placeholder='10' />
          <span className={'col-2  ' + styles.new_sh_span}>Max: 10</span>
        </div>
      </div>
      <div>
        <PageSectionHead title='Position taking' />
        <>
          <PositionTakingTableHeaderWithOutCopy />
          <PositionTakingTableWithOutCopy title={'Live Casino:'} />
        </>
      </div>
    </>
  )
}

export default LiveCasino

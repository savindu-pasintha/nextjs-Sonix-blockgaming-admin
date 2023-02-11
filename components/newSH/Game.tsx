import React from 'react'
import PageSectionHead from '../PageSectionHead/PageSectionHead'
import { PositionTakingTableWithOutCopy } from './PositionTakingTables'
import styles from '../../pages/ezbets68/common.module.css'
import { BiCopy } from 'react-icons/bi'
const Game = () => {
  return (
    <>
      <div>
        <PageSectionHead title='Games' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Player Max Win:</label>
          <select className='col-2 '>
            <option>Unlimited</option>
          </select>
          <span className={'col-2  ' + styles.new_sh_span}></span>
          <label className={'col-2  ' + styles.new_sh_label}>Player Max Los:</label>
          <select className='col-2 '>
            <option>Unlimited</option>
          </select>
          <span className={'col-2  ' + styles.new_sh_span}></span>
        </div>
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Daily Reset:</label>
          <select className='col-2 '>
            <option>Yes</option>
          </select>
        </div>
      </div>

      <div>
        <PageSectionHead title='Commission' />
        <div className={`row ${styles.new_sh_row1_bg} mx-2 my-2 py-2`}>
          <label className={'col-2  ' + styles.new_sh_label}>Game:</label>
          <input type='text' className='col-2 ' placeholder='10' />
          <span className={'col-2  ' + styles.new_sh_span}>%Max:10</span>
        </div>
      </div>
      <div>
        <PageSectionHead title='Position taking' />
        <PositionTakingTableWithOutCopy title={'Game'} />
      </div>
    </>
  )
}

export default Game

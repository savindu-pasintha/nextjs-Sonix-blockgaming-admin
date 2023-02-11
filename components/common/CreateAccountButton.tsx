import React, { useEffect, useState } from 'react'
import styles from '../../pages/ezbets68/common.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const CreateAccountButton = ({ title = 'Create Account' }) => {
  return (
    <div className='row'>
      <div className='flex w-full justify-center p-2'>
        <div className={`${styles.create_account_button} px-6 py-2`}>{title}</div>
      </div>
    </div>
  )
}

export default CreateAccountButton

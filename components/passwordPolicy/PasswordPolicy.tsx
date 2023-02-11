import React, { useEffect, useState } from 'react'
import styles from '../../pages/ezbets68/common.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RiKey2Fill } from 'react-icons/ri'
import { IoIosRemoveCircle } from 'react-icons/io'

const PasswordPolicy = () => {
  return (
    <div className={`row `}>
      <div className='col-12 d-flex m-1'>
        <RiKey2Fill className={`${styles.password_policy_icon}`} />
        <h className={`${styles.password_policy_h} `}> Password policy</h>
      </div>
      <div className='col-12 d-flex m-1'>
        <IoIosRemoveCircle className={`${styles.password_policy_icon}`} />
        <p className={`${styles.password_policy_p}`}>Your password length must between 6-20 characters</p>
      </div>
      <div className='col-12 d-flex m-1'>
        <IoIosRemoveCircle className={`${styles.password_policy_icon}`} />
        <p className={`${styles.password_policy_p}`}>
          Your password must include a combination of characters (uppercase or lowercase letters) and numbers
        </p>
      </div>
      <div className='col-12 d-flex m-1'>
        <IoIosRemoveCircle className={`${styles.password_policy_icon} d-flex`} />
        <p className={`${styles.password_policy_p} `}>Your password must not contain your login name first and last name</p>
      </div>
    </div>
  )
}

export default PasswordPolicy

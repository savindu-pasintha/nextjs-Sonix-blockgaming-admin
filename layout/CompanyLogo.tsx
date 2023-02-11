import React from 'react'
import styles from '../pages/ezbets68/common.module.css'

const CompanyLogo = ({ logo_src }) => {
  return (
    <div className={`text-center pb-2 mb-4 ${styles.companyLogo}`}>
      <img src={logo_src ? logo_src : '/images/logo.png'} />
    </div>
  )
}

export default CompanyLogo

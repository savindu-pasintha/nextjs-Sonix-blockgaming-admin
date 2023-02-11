import React, { useEffect, useState } from 'react'
import styles from '../../common.module.css'

const createNewMember = () => {
  return (
    <>
      <div className='mb-3 shadow pb-5 bg-light'>
        <div className={`w-full text-center mb-10`}>
          <span className={`${styles.font18} ${styles.fw700} ${styles.headerDiv} rounded-b text-white bg-light text-center px-10 py-2 `}>
            New member/player
          </span>
        </div>
        <div className={`${styles.headerDiv} w-full text-center py-3`}>
          <span className={`${styles.font18} ${styles.fw700} text-white text-center px-10 py-2 `}>User Information</span>
        </div>
        <div className='grid grid-cols-12 gap-y-2 text-gray-800 font-semibold p-3'>
          <div className='col-span-2 rounded-l bg-[#D7F5EB] py-3 pl-12'>Account ID:</div>
          <div className='col-span-10 rounded-r bg-[#D7F5EB] p-3 font-normal flex gap-x-2 items-center'>
            <span>ssmatruyen123123</span>
            <select>
              <option value=''>a</option>
            </select>
            <select>
              <option value=''>b</option>
            </select>
            <select>
              <option value=''>c</option>
            </select>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>Remark:</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <input className='py-1' type='text' />
          </div>
          <div className='col-span-2 bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>*Required</span>
          </div>
          <div className='col-span-2 bg-[#DCEFFD] p-3'>Email:</div>
          <div className='col-span-3 rounded-r bg-[#DCEFFD] p-3'>
            <input className='py-1' type='text' />
          </div>

          <div className='col-span-2 rounded-l bg-[#D7F5EB] py-3 pl-12'>Password:</div>
          <div className='col-span-3 bg-[#D7F5EB] p-3'>
            <span>
              <input className='py-1' type='text' />
            </span>
          </div>
          <div className='col-span-2 bg-[#D7F5EB] p-3 font-normal text-gray-400'>
            <span>*Required</span>
          </div>
          <div className='col-span-2 bg-[#D7F5EB] p-3'>Currency:</div>
          <div className='col-span-3 rounded-r bg-[#D7F5EB] p-3'>
            <select className='w-full'>
              <option>SGD</option>
            </select>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>First Name:</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <span>
              <input className='py-1' type='text' />
            </span>
          </div>
          <div className='col-span-2 bg-[#DCEFFD] p-3 font-normal text-gray-400'></div>
          <div className='col-span-2 bg-[#DCEFFD] p-3'>Phone:</div>
          <div className='col-span-3 rounded-r bg-[#DCEFFD] p-3'>
            <input className='py-1' type='text' />
          </div>

          <div className='col-span-12 rounded bg-[#D7F5EB] py-3 pl-12'>Last Name:</div>
        </div>

        <div className='flex items-end text-gray-800 p-3 pb-0 gap-x-10'>
          <h6 className='text-gray-800 text-center px-3'>Product:</h6>
          <div className='flex gap-x-1'>
            <div className={`${styles.headerDiv} h-full flex rounded-t`}>
              <span className='px-6 py-1 font-semibold text-white'>Sports</span>
            </div>
            <div className='h-full flex border border-b-0 rounded-t'>
              <span className='px-6 py-1 font-semibold'>Game</span>
            </div>
            <div className='h-full flex border border-b-0 rounded-t'>
              <span className='px-6 py-1 font-semibold'>Live Casino</span>
            </div>
            <div className='h-full flex border border-b-0 rounded-t'>
              <span className='px-6 py-1 font-semibold'>Game Provider</span>
            </div>
            <div className='h-full flex border border-b-0 rounded-t'>
              <span className='px-6 py-1 font-semibold'>Third Party Sports</span>
            </div>
          </div>
        </div>

        <div className={`${styles.headerDiv} w-full text-center py-3`}>
          <span className={`${styles.font18} ${styles.fw700} text-white text-center px-10 py-2 `}>Product Setting</span>
        </div>
        <div className='grid grid-cols-12 gap-y-2 text-gray-800 font-semibold p-3'>
          <div className='col-span-12 rounded bg-[#DCEFFD] p-3'>THIRD PARTY SPORTS</div>

          <div className='col-span-2 rounded-l bg-[#D7F5EB] py-3 pl-12'>Game Provider Name :</div>
          <div className='col-span-10 bg-[#D7F5EB] p-3'>
            <select className=''>
              <option value=''>Saba Sports</option>
            </select>
          </div>
        </div>

        <div className={`${styles.headerDiv} w-full text-center py-3`}>
          <span className={`${styles.font18} ${styles.fw700} text-white text-center px-10 py-2 `}>Commission</span>
        </div>
        <div className='grid grid-cols-12 gap-y-2 text-gray-800 font-semibold p-3'>
          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>P Comm 1 :</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>10</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>P Comm 2 :</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>10</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>P Comm 3 :</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>10</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>
        </div>

        <div className={`${styles.headerDiv} w-full text-center py-3`}>
          <span className={`${styles.font18} ${styles.fw700} text-white text-center px-10 py-2 `}>Position Taking</span>
        </div>
        <div className='grid grid-cols-12 gap-y-2 text-gray-800 font-semibold p-3'>
          <div className='col-span-12 rounded bg-[#DCEFFD] p-3'>TYPEAGENT</div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>PT 1:</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>0</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>PT 2:</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>0</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>Outright :</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>0</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>HDP Live :</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>0</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>

          <div className='col-span-2 rounded-l bg-[#DCEFFD] py-3 pl-12'>OU Live :</div>
          <div className='col-span-3 bg-[#DCEFFD] p-3'>
            <select className='w-full'>
              <option value=''>0</option>
            </select>
          </div>
          <div className='col-span-7 rounded-r bg-[#DCEFFD] p-3 font-normal text-gray-400'>
            <span>%</span>
          </div>
        </div>

        <div className='flex w-full justify-center py-24'>
          <div className={`${styles.buttonPrimary} px-6 py-2`}>Create Account</div>
        </div>

        <div className='px-20'>
          <p className='text-gray-800 font-bold'>Password policy</p>
          <p className='text-gray-800'>Your password length must between 6-20 characters</p>
          <p className='text-gray-800'>
            Your password must include a combination of characters (uppercase or lowercase letters) and numbers
          </p>
          <p className='text-gray-800'>Your password must not contain your login name first and last name</p>
        </div>
      </div>
    </>
  )
}

createNewMember.auth = true
export default createNewMember

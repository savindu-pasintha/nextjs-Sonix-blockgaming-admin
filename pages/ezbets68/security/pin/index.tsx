import React,  {useEffect, useState} from 'react';
import styles from '../../common.module.css';
import { Row, Col } from 'react-bootstrap';
import MUIDataTable from 'mui-datatables';

const createNewMember = () => {

  return (
    <>
      <div className="mb-3 shadow pb-5 bg-light">
        <div className={`${styles.headerDiv} w-full text-center py-3`}>
              <span
                className={`${styles.font18} ${styles.fw700} text-white text-center px-10 py-2 `}
              >
                Change Security Code
              </span>
        </div>
        <div>
          <p className="mt-6 px-5 text-red-500 font-bold">Your six- digit numerical Pin Code ( PC ) must:</p>
          <p className="px-5 text-red-500">Contain at least two different digits</p>
          <p className="mb-6 px-5 text-red-500">Not include consecutive numbers, forwards or backwards e.g 123456, 654321</p>
          <div className="flex items-center w-full bg-[#DCEFFD] text-gray-800 rounded-lg p-3 shadow-inner">
            <p className="font-bold my-auto w-1/3 text-gray-800">Old Pin Code :</p>
            <div className="flex gap-1">
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <span className="ml-3 my-auto">show</span>
            </div>
          </div>
          <div className="flex items-center w-full bg-[#DCEFFD] text-gray-800 rounded-lg p-3 my-2 shadow-inner">
            <p className="font-bold my-auto w-1/3 text-gray-800">Pin Code :</p>
            <div className="flex gap-1">
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <span className="ml-3 my-auto">show</span>
            </div>
          </div>
          <div className="flex items-center w-full bg-[#DCEFFD] text-gray-800 rounded-lg p-3 shadow-inner">
            <p className="font-bold my-auto w-1/3 text-gray-800">Confirm Pin Code :</p>
            <div className="flex gap-1">
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <input className="border w-10 h-10" type="number" />
              <span className="ml-3 my-auto">show</span>
            </div>
          </div>
          <div className="px-5 mt-6 flex justify-end gap-3">
            <div className={`${styles.buttonSecondary} py-2 px-6`}>Cancel</div>
            <div className={`${styles.buttonPrimary} py-2 px-6`}>Change Pin Code</div>
          </div>
        </div>
      </div>
    </>
  );
};

createNewMember.auth=true;
export default createNewMember;
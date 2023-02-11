import React, { useEffect, useState } from 'react'
import styles from '../../ezbets68/common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import MUIDataTable from 'mui-datatables'
import ReportTable from '../../../components/ReportTable/ReportTable'
import CompanyLogo from '../../../layout/CompanyLogo'
import FormSelect from '../../../components/form-field/select'
import { useStoreActions, useStoreState } from '../../../store/hooks'
import { UnauthorizedAgentList } from '../../../store/interfaces/agent.interface'

import FormDate from '../../../components/form-date/FormDate'
const deposit = () => {
  const [tableData, setTableData] = React.useState([])
  const columns = ['date', 'username', 'coin', 'amount', 'amount', 'payment']
  const data = []
  /***********used for sponsor link **************/
  const EZBUrl = process.env.NEXT_PUBLIC_EZBETS68_URL
  const { currentBrand } = useStoreState(state => state.appStore)
  const payload = {
    brandCode: currentBrand ? currentBrand : 'sonicxgame',
  }
  const [agentListPayload, setAgentListPayload] = useState<AgentListPayLoad>(payload)
  const { getAgentList } = useStoreActions(actions => actions.agentStore)
  const { agentList } = useStoreState(state => state.agentStore)

  if (agentList.length) {
    agentList.map(list => {
      const item = [list.userName, list.email, list.fullName, list.phone, `${EZBUrl}?Sponsor=${list.userName}`]
      data.push(item)
    })
  }

  const formselect2 = [
    {
      label: 'Status:',
      option: (
        <>
          <option>Pending</option> <option> option</option>
        </>
      ),
    },
    {
      label: 'Type of coin:',
      option: (
        <>
          <option>ETH</option> <option> option</option>
        </>
      ),
    },
  ]

  useEffect(() => {
    if (currentBrand) {
      setAgentListPayload({ ...agentListPayload, brandCode: currentBrand })
      getAgentList(agentListPayload)
    }
  }, [currentBrand])
  React.useEffect(() => {
    var ar = []
    for (let i = 0; i < 5; i++) {
      var itm = [
        { value: '2023-11-09 05:19:14', color: '' },
        { value: 'dsdsdse', color: '' },
        { value: 'VND', color: '' },
        { value: (Math.random(100) * 100).toFixed(0), color: '' },
        { value: (Math.random(100) * 100).toFixed(0), color: '' },
        { value: 'fist buy', color: '' },
      ]
      ar.push(itm)
    }
    setTableData(ar)
  }, [])
  return (
    <>
      <CompanyLogo logo_src={'/images/logo_for_agent_group.png'} />
      <div className='mb-3 pb-5'>
        <div className={`d-flex pb-2`}>
          <Row className={`col-12 mx-0 ${styles.player_report_row}`}>
            <Col className='px-5 pb-4 col-12 text-center '>
              <div className={`${styles.player_report_text_container} `}>
                <span className={`${styles.player_report_text} `}> Withdraw</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`mx-0  text-right `}>
          <span className={`${styles.deposit_page_total_debit_text} p-2`}>TOTAL DEBIT:55454548666</span>
        </Row>
        <Row className={`mx-0  text-center ${styles.player_report_row_background}`}>
          <span className={`${styles.player_report_search_text} p-2`}>Tìm kiếm</span>
        </Row>

        <Row className={`mx-0 d-flex justify-content-around ${styles.player_report_row_background}`}>
          <FormDate data={[{ label: 'Start Date' }, { label: 'End Date' }]} />
          <FormSelect data={formselect2}></FormSelect>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <Col className={`${styles.font17} ${styles.rounded2} py-2 text-center`}>
            <Button style={{ backgroundColor: '#BDBDBD' }} className={` mx-2 mb-1`} onClick={() => {}}>
              Reset
            </Button>
            <Button className={` ${styles.font17}  ${styles.gradientBlue} mb-1 px-5`} onClick={() => {}}>
              Search
            </Button>
          </Col>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <div className={`${styles.player_report_table_mainHeading} text-center p-2`}>
            <label className={`${styles.font18} text-light ${styles.fw700}`}>Deposit List Infromation</label>
          </div>
          <Col className={`${styles.font18} p-2 mx-1 border-0`}>
            <ReportTable table_columns={columns} table_data={tableData} last_column_enable={false} />
          </Col>
        </Row>
      </div>
    </>
  )
}

deposit.auth = true
export default deposit

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import FormText from '../../../components/form-field/text'
import FilterButton from '../../../components/filter-button'
import { useStoreActions, useStoreState } from '../../../store/hooks'
import { TransLogsPayLoad } from '../../../store/interfaces/payment.interface'
import CompanyLogo from '../../../layout/CompanyLogo'
import ReportTable from '../../../components/ReportTable/ReportTable'

const columns = [
  'Day trading',
  'Transaction type',
  'Member account',
  'Transaction amount',
  'Before settlement',
  'Balance after transaction',
]

const data: any = []

const formtext1 = [{ label: 'Member account', placeholder: '', name: '' }]

const formtext2 = [{ label: 'Minimum amount', placeholder: '', name: '' }]

const formtext3 = [{ label: 'Maximum amount', placeholder: '', name: '' }]

const filterButton = [
  { text: 'Deposits' },
  { text: 'Withdraw money' },
  { text: 'Successful offer' },
  { text: 'Add money manually' },
  { text: 'Minus manual money' },
  { text: 'The proposal is accepted' },
  { text: 'Refund' },
  { text: 'The proposal is accepted' },
  { text: 'Complementary' },
  { text: 'Proposal Rewards' },
  { text: 'Referral Bonus' },
  { text: 'Sales commissions' },
  { text: 'Quest reward' },
  { text: 'Activity rewards' },
  { text: 'VIP birthday gift' },
  { text: 'Activity rewards' },
  { text: 'VIP birthday bonus' },
  { text: 'Honus recovery' },
  { text: 'Extra wallet bonus' },
]
const transactionLogs = () => {
  const [tableData, setTableData] = React.useState([])
  const { currentBrand } = useStoreState(state => state.appStore)

  const payload = {
    brandCode: currentBrand ? currentBrand : 'sonicxgame',
  }

  const [transLogsPayLoad, setTransLogsPayLoad] = useState<TransLogsPayLoad>(payload)

  const { getTransLogs } = useStoreActions(actions => actions.paymentStore)

  useEffect(() => {
    if (currentBrand) {
      setTransLogsPayLoad({ ...transLogsPayLoad, brandCode: currentBrand })
      getTransLogs(transLogsPayLoad)
    }
  }, [currentBrand])

  const { transLogs } = useStoreState(state => state.paymentStore)

  if (transLogs.length) {
    transLogs.map(list => {
      const item = [
        list.dayTrading,
        list.transactionType,
        list.memberAccount,
        list.transactionAmount,
        list.beforeSettlement,
        list.balanceAfterTransaction,
      ]
      data.push(item)
    })
  }

  React.useEffect(() => {
    var ar = []
    for (let i = 0; i < 5; i++) {
      var itm = [
        { value: (Math.random(100) * 10).toFixed(0) + '11212d', color: '' },
        { value: 'sp jhone', color: '' },
        { value: 'dung' + (Math.random(100) * 100).toFixed(0), color: '' },
        { value: (Math.random(100) * 1000).toFixed(0), color: '' },
        { value: (Math.random(100) * 1000).toFixed(0), color: '' },
        { value: (Math.random(100) * 10).toFixed(0), color: '' },
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
                <span className={`${styles.player_report_text} `}> All transaction logs</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`mx-0  text-center ${styles.player_report_row_background}`}>
          <span className={`${styles.player_report_search_text} p-2`}>Search</span>
        </Row>

        <Row className={` mx-0 ${styles.player_report_row_background}`}>
          <Col
            className={`${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} `}
          >
            <label htmlFor='' className={`${styles.fw700}  col-md-3 col-sm-12`}>
              Day trading:
            </label>
            <input type='text' className='col-4' placeholder='2022-05-06 Monday 00:11:06' />
            <input type='text' className=' mx-2 col-4' name='' id='' placeholder='2022-05-06 Monday 00:11:06' />
          </Col>
          <Col>
            <Row>
              <Col
                className={`${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} `}
              >
                <label className={`${styles.form_select_lable} col-6`}>Member account: </label>
                <input className={`${styles.fw700} col-6`} type='text' name='' id='' placeholder={''} />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>

        <Row className={`mx-0 ${styles.player_report_row_background}`}>
          <Col sm={12}>
            <Row>
              <Col
                sm={12}
                className={`${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} `}
              >
                <label className={`${styles.form_select_lable} col-6`}>Minimum amount: </label>
                <input className={`${styles.fw700} col-6`} type='text' name='' id='' placeholder={''} />
              </Col>
              <Col
                sm={12}
                className={`${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} `}
              >
                <label className={`${styles.form_select_lable} col-6`}>Maximum amount: </label>
                <input className={`${styles.fw700} col-6`} type='text' name='' id='' placeholder={''} />
              </Col>
            </Row>
          </Col>
          <Col sm={12}></Col>
        </Row>

        <FilterButton data={filterButton} label='Transaction type:'></FilterButton>

        <Row className='mx-0 my-2'>
          <Col className={`${styles.font17} ${styles.rounded2} py-2 text-center`}>
            <Button className={` ${styles.font17} mx-1 mb-1 bg-secondary px-3`}>Reset</Button>
            <Button className={` ${styles.font17} ${styles.gradientBlue}  mx-1 bg-warning mb-1 px-5`}>Search</Button>
          </Col>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <div className={`${styles.player_report_table_mainHeading} text-center p-2`}>
            <label className={`${styles.all_transaction_list_text}`}>Transaction list</label>
          </div>
          <Col className={`${styles.font18} p-2 mx-1 border-0`}>
            <ReportTable table_columns={columns} table_data={tableData} />
          </Col>
        </Row>
      </div>
    </>
  )
}

transactionLogs.auth = true
export default transactionLogs

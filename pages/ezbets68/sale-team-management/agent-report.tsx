import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import FormSelect from '../../../components/form-field/select'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useStoreActions, useStoreState } from '../../../store/hooks'
import { AgentReportPayLoad } from '../../../store/interfaces/agent.interface'
import ReportTable from '../../../components/ReportTable/ReportTable'
import CompanyLogo from '../../../layout/CompanyLogo'
const columns = [
  'ID Agent Real name ',
  'Agent Level ',
  'Number of downstream agents',
  'Total number of subscribers',
  'Total number of players',
  'No duplicate bettors',
  'Deposit order',
  'Deposit amount/First deposit',
  'Deposit amount',
  'Withdrawal amount ',
  'Manual adjustment',
]

const data = []

const options = {
  filterType: 'checkbox',
}

const formselect1 = [
  {
    label: 'Timezone:',
    option: (
      <>
        <option>GMT+ 0800 ( system time zone) </option>
        <option>GMT+ 0800 ( system time zone) </option>
      </>
    ),
  },
  {
    label: 'Agent Level:',
    option: (
      <>
        <option>SSMA</option>
        <option>SMA</option>
        <option>MA</option>
      </>
    ),
  },
  {
    label: 'Report type: ',
    option: (
      <>
        <option>All</option>
        <option>Activated</option>
        <option>Delayed</option>
        <option>Disabled</option>
      </>
    ),
  },
  {
    label: 'Data filter: ',
    option: (
      <>
        <option>All</option>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </>
    ),
  },
]

// ***********************************
const agentReport = () => {
  const [tableData, setTableData] = React.useState([])

  const { currentBrand } = useStoreState(state => state.appStore)

  const payload = {
    brandCode: currentBrand ? currentBrand : 'sonicxgame',
  }

  const [agentReportPayLoad, setAgentReportPayLoad] = useState<AgentReportPayLoad>(payload)

  const { getAgentReport } = useStoreActions(actions => actions.agentStore)

  useEffect(() => {
    if (currentBrand) {
      setAgentReportPayLoad({ ...agentReportPayLoad, brandCode: currentBrand })
      getAgentReport(agentReportPayLoad)
    }
  }, [currentBrand])

  const { agentReport } = useStoreState(state => state.agentStore)

  if (agentReport.length) {
    agentReport.map(list => {
      const item = [
        list.realName,
        list.agentLevel,
        list.downstreamAgents,
        list.totalSubscribers,
        list.totalPlayers,
        list.duplicateBettors,
        list.depositOrder,
        list.firstDeposit,
        list.depositAmount,
        list.withdrawalAmount,
        list.manualAdjustment,
      ]
      data.push(item)
    })
  }

  React.useEffect(() => {
    var ar = []
    for (let i = 0; i < 5; i++) {
      var itm = [
        { value: (Math.random(100) * 10).toFixed(0) + '11212d', color: '' },
        { value: (Math.random(100) * 10).toFixed(0), color: '' },
        { value: 'sp jhone', color: '' },
        { value: 'dung' + (Math.random(100) * 100).toFixed(0), color: '' },
        { value: 'g5', color: '' },
        { value: (Math.random(100) * 1000).toFixed(0), color: '' },
        { value: (Math.random(100) * 1000).toFixed(0), color: '' },
        { value: (Math.random(100) * 10).toFixed(0), color: '' },
        { value: (Math.random(100) * 10).toFixed(0), color: '' },
        { value: (Math.random(100) * 10).toFixed(0), color: '' },
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
                <span className={`${styles.player_report_text} `}> Agent Report</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`m-0 pb-2 ${styles.agent_report_row_background_color}`}>
          <Col className='col-lg-4 col-sm-6 col-xs-12 mt-3 d-flex align-items-left flex-column'>
            <span className={`${styles.agent_report_from_date_to_date}`}>From Date</span>
            <Calendar className={` ${styles.bgBlue} mt-2 ${styles.rcalendar} text-light`} />
          </Col>
          <Col className='col-lg-4 col-sm-6 col-xs-12 mt-3 d-flex align-items-left  flex-column'>
            <span className={`${styles.agent_report_from_date_to_date}`}>To Date</span>
            <Calendar className={` ${styles.bgBlue} mt-2 ${styles.rcalendar} text-light`} />
          </Col>
        </Row>

        <Row className={`m-0 mt-0 ${styles.agent_report_row_background_color}`}>
          <span className={` ${styles.agent_report_shortcut_date_text} m-2`}>Shortcut Date Selector</span>
          <Row>
            <div className='tab'>
              <button className={`${styles.tablinks} `}>All</button>
              <button className={`${styles.tablinks}`}>Today</button>
              <button className={`${styles.tablinks}`}>Yesterday</button>
              <button className={`${styles.tablinks}`}>Past 7 Days</button>
              <button className={`${styles.tablinks}`}>Past 30 Days</button>
              <button className={`${styles.tablinks}`}>This Week</button>
              <button className={`${styles.tablinks}`}>Last Week</button>
              <button className={`${styles.tablinks}`}>This Month</button>
            </div>
          </Row>
          <span className={`m-2`}>
            <i className={`${styles.agent_report_highlight_text1}`}>*Check the last 60 days dealer report</i>
          </span>
        </Row>

        <Row className={`mx-0 d-flex justify-content-around ${styles.player_report_row_background}`}>
          <FormSelect data={formselect1}></FormSelect>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <Col className={`${styles.font17} ${styles.rounded2} py-2 text-center`}>
            <Button style={{ backgroundColor: '#BDBDBD' }} className={` mx-2 mb-1`} onClick={() => {}}>
              Reset
            </Button>
            <Button className={` ${styles.player_list_search_button}  ${styles.gradientBlue} mb-1 px-5`} onClick={() => {}}>
              Search
            </Button>
          </Col>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <div className={`${styles.player_report_table_mainHeading} text-center p-2`}>
            <label className={`${styles.font18} text-light ${styles.fw700}`}>Upstream Agent Report</label>
          </div>
          <span className={`${styles.fw700} py-3 text-center`}>
            <i className={`${styles.agent_report_highlight_text2}`}>
              (This report will show the current subordinate agents and their data.
              <br />
              If you need to settle with an agent, please save the data before changing geographical positions. The system settles at
              00:00~01:00 (GMT+8). Please check the data <br />
              after settlement
            </i>
          </span>
          <Col className={`${styles.font18} p-2 mx-1 border-0`}>
            <ReportTable table_columns={columns} table_data={tableData} />
          </Col>
        </Row>
      </div>
    </>
  )
}

agentReport.auth = true
export default agentReport

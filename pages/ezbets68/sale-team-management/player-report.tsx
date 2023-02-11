import React, { useEffect, useState } from 'react'
import styles from '../common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import FormSelect from '../../../components/form-field/select'
import FormText from '../../../components/form-field/text'
import { useStoreActions, useStoreState } from '../../../store/hooks'
import { PlayerReportPayLoad } from '../../../store/interfaces/player.interface'
import ReportTable from '../../../components/ReportTable/ReportTable'
import CompanyLogo from '../../../layout/CompanyLogo'
const columns = [
  'Member account real name',
  'Agent Level',
  'Real name',
  'Name Label',
  'New agent group',
  'Number of recharges',
  'Deposit amount',
  'Number of withdrawals',
  'Withdrawal amount',
  'Manual adjustment',
  'Total bet amount',
  '',
]

const data: any = []

const formselect1 = [
  {
    label: 'Member account:',
    option: (
      <>
        <option>Exact search</option> <option>Approximation search</option>
      </>
    ),
  },
]
const formtext1 = [
  { label: '', placeholder: '', name: '' },
  { label: 'Real Name: ', placeholder: '', name: 'realName' },
]
const formselect2 = [
  {
    label: 'Agent group:',
    option: (
      <>
        <option>f8a06</option> <option>f8a06</option>
      </>
    ),
  },
  {
    label: 'Time zone:',
    option: (
      <>
        <option>GMT +0700</option> <option> GMT +0700</option>
      </>
    ),
  },
  {
    label: 'Name Label:',
    option: (
      <>
        <option>Enter to select</option> <option> option</option>
      </>
    ),
  },
]
const formtext2 = [
  { label: 'Lowest deposit', placeholder: '', name: '' },
  { label: 'Top deposit', placeholder: '', name: '' },
  { label: 'Lowest withdrawal amount', placeholder: '', name: '' },
  { label: 'Top withdrawal amount', placeholder: '', name: '' },
  { label: 'More valid bets', placeholder: '', name: '' },
  { label: 'Smaller valid bet', placeholder: '', name: '' },
  { label: 'Lowest total win/loss', placeholder: '', name: '' },
  { label: 'Highest total win/loss', placeholder: '', name: '' },
]

const playerReport = () => {
  const { currentBrand } = useStoreState(state => state.appStore)
  const [tableData, setTableData] = React.useState([])

  const payload = {
    brandCode: currentBrand ? currentBrand : 'sonicxgame',
  }

  const [playerReportPayLoad, setPlayerReportPayLoad] = useState<PlayerReportPayLoad>(payload)

  const { getPlayerReport } = useStoreActions(actions => actions.playerStore)

  useEffect(() => {
    if (currentBrand) {
      setPlayerReportPayLoad({ ...playerReportPayLoad, brandCode: currentBrand })
      getPlayerReport(playerReportPayLoad)
    }
  }, [currentBrand])

  const { playerReport } = useStoreState(state => state.playerStore)

  if (playerReport.length) {
    playerReport.map(list => {
      const item = [
        list.memberAccount,
        list.agentLevel,
        list.realName,
        list.nameLabel,
        list.newAgentGroup,
        list.numberOfRecharges,
        list.numberOfWithdrawals,
        list.withdrawalAmount,
        list.manualAdjustment,
        list.totalBetAmount,
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
      ]
      ar.push(itm)
    }
    setTableData(ar)
  }, [])

  return (
    <>
      <CompanyLogo logo_src={''} />
      <div className='mb-3  pb-5' style={{ backgroundColor: 'none' }}>
        <div className={`d-flex pb-2`}>
          <Row className={`col-12 mx-0 ${styles.player_report_row}`}>
            <Col className='px-5 pb-4 col-12 text-center '>
              <div className={`${styles.player_report_text_container} `}>
                <span className={`${styles.player_report_text} `}>Player Report</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`mx-0  text-center ${styles.player_report_row_background}`}>
          <span className={`${styles.player_report_search_text} p-2`}>Search</span>
        </Row>

        <Row className={`mx-0 d-flex justify-content-around ${styles.player_report_row_background}`}>
          <FormSelect data={formselect1}></FormSelect>
          <FormText data={formtext1}></FormText>
          <FormSelect data={formselect2}></FormSelect>
          <Col className='col-6 d-flex align-items-center'>
            <input type='date' className={`p-2 ${styles.player_report_input_date}`} />
            <input type='date' className={`p-2 mx-2 ${styles.player_report_input_date}`} name='' id='' />
          </Col>
          <FormText data={formtext2}></FormText>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <Col className={`${styles.font17} ${styles.rounded2} py-2 text-center`}>
            <Button style={{ backgroundColor: '#BDBDBD' }} className={` mx-2 mb-1`}>
              Reset
            </Button>
            <Button className={` ${styles.player_list_search_button}  ${styles.gradientBlue} mb-1 px-5`}>Search</Button>
          </Col>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <div className={`${styles.player_report_table_mainHeading} text-center p-2`}>
            <label className={`${styles.font18} text-light ${styles.fw700}`}>Player Report</label>
          </div>
          <Col className={`${styles.font18} p-2 mx-1 border-0`}>
            <ReportTable table_columns={columns} table_data={tableData} />
          </Col>
        </Row>
      </div>
    </>
  )
}

playerReport.auth = true
export default playerReport

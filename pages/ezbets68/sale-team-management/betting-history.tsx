import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import FormSelect from '../../../components/form-field/select'
import FormText from '../../../components/form-field/text'
import FilterButton from '../../../components/filter-button'
import { useStoreActions, useStoreState } from '../../../store/hooks'
import { BettingHistoryPayLoad } from '../../../store/interfaces/player.interface'
import CompanyLogo from '../../../layout/CompanyLogo'
import ReportTable from '../../../components/ReportTable/ReportTable'

const formselect1 = [
  {
    label: 'Time zone:',
    option: (
      <>
        <option>GMT +0700h</option> <option>GMT +0800</option>
      </>
    ),
  },
]

const formtext1 = [{ label: 'Member account ', placeholder: '', name: '' }]
const formselect2 = [
  {
    label: 'Game provider:',
    option: (
      <>
        <option>All </option> <option>All </option>
      </>
    ),
  },
  {
    label: 'Product type:',
    option: (
      <>
        <option>All </option> <option>All </option>
      </>
    ),
  },
  {
    label: 'Game group:',
    option: (
      <>
        <option>All </option> <option>All </option>
      </>
    ),
  },
  {
    label: 'Game:',
    option: (
      <>
        <option>All </option> <option>All </option>
      </>
    ),
  },
]
const formtext2 = [
  { label: 'Transaction ID', placeholder: '', name: '' },
  { label: 'Match ID number/round', placeholder: '', name: '' },
]
const filterButton = [
  { text: 'All' },
  { text: 'Solved' },
  { text: 'Refuse' },
  { text: 'Cancel' },
  { text: 'Order cancellation system' },
  { text: 'Active' },
  { text: 'The player cancels' },
]

/**********************/
const bettingHistory = () => {
  const [tableData, setTableData] = React.useState([])
  const columns = [
    'Bet time',
    'Statistical time',
    'Transaction ID',
    'Match ID number/round',
    'Game house',
    'Game',
    'Member account',
    'Bet amount',
    'Valid bets',
    'Win/ Lose',
    ,
  ]

  const data: any = []
  const { currentBrand } = useStoreState(state => state.appStore)
  const payload = {
    brandCode: currentBrand ? currentBrand : 'sonicxgame',
  }

  const [bettingHistoryPayLoad, setBettingHistoryPayLoad] = useState<BettingHistoryPayLoad>(payload)

  const { getBettingHistory } = useStoreActions(actions => actions.playerStore)

  useEffect(() => {
    if (currentBrand) {
      setBettingHistoryPayLoad({ ...bettingHistoryPayLoad, brandCode: currentBrand })
      getBettingHistory(bettingHistoryPayLoad)
    }
  }, [currentBrand])

  const { bettingHistory } = useStoreState(state => state.playerStore)

  if (bettingHistory.length) {
    bettingHistory.map(list => {
      const item = [
        list.betTime,
        list.statisticalTime,
        list.transactionID,
        list.matchIDNumber,
        list.gameHouse,
        list.game,
        list.memberAccount,
        list.betAmount,
        list.validBets,
        list.winLose,
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
                <span className={`${styles.player_report_text} `}> Betting History</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`mx-0  text-center ${styles.player_report_row_background}`}>
          <span className={`${styles.player_report_search_text} p-2`}>Search</span>
        </Row>

        <Row className='py-2 mx-0  justify-content-between ' style={{ backgroundColor: '#FFF' }}>
          <Row>
            <Col
              className={` mx-2  my-2 ${styles.betting_history_filter_item_height} ${styles.filterdiv} ${styles.seagreenBg}  ${styles.rounded2}  `}
            >
              <label htmlFor='' className={`${styles.form_select_lable}  col-md-3 col-sm-12`}>
                Bet time:
              </label>
              <input type='text' className={`${styles.betting_history_input_box}`} placeholder='2022-05-06 Monday 00:11:06' />
              <input
                type='text'
                className={`mx-2 ${styles.betting_history_input_box}`}
                name=''
                id=''
                placeholder='2022-05-06 Monday 00:11:06'
              />
            </Col>

            <Col className={` mx-2  my-2 ${styles.filterdiv} ${styles.seagreenBg}  ${styles.rounded2}  `}>
              <Row>
                <Col>
                  <label className={`${styles.form_select_lable} col-6`}>Time zone:</label>
                  <select className={`${styles.commonSelect} py-1 col-6 px-3`}>
                    <option>GMT +0700h</option> <option>GMT +0800</option>
                  </select>
                </Col>
                <Col>
                  <label className={`${styles.form_select_lable} col-6`}>Member account: </label>
                  <input className={`${styles.fw700} col-6`} type='text' name={'Member account'} id='' placeholder={''} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            {formselect2.length &&
              formselect2.map((d, i) => (
                <Col
                  key={i}
                  className={`${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} `}
                >
                  <label className={`${styles.form_select_lable} col-6`}>{d.label} </label>
                  <select className={`${styles.commonSelect} py-1 col-6 px-3`}>{d.option}</select>
                </Col>
              ))}
          </Row>

          <Row>
            <Col>
              <Row>
                <Col
                  className={`m-2 ${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv}  ${styles.fontBlue} ${styles.rounded2} `}
                >
                  <label className={`col-6 ${styles.form_select_lable}`}>Transaction ID: </label>
                  <input className={` col-6`} type='text' name={'Transaction ID'} id='' placeholder={''} />
                </Col>
                <Col
                  className={`ml-2 mr-2 mt-2 py-2 ${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} ${styles.fontBlue} ${styles.rounded2} `}
                >
                  <label className={`${styles.form_select_lable} col-6`}>Match ID number/round: </label>
                  <input className={`${styles.fw700} col-6`} type='text' name={'Match ID number/round'} id='' placeholder={''} />
                </Col>
              </Row>
            </Col>
            <Col
              className={`m-2 ml-2 ${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} ${styles.fontBlue} ${styles.rounded2} `}
            >
              <label className={`${styles.form_select_lable} col-3 m-2`}>Total bet amount</label>
              <select className={`col-2 m-2`}>
                <option value=''> &gt;= </option>
                <option value=''> &lt;= </option>
                <option value=''> &lt; </option>
                <option value=''> &gt; </option>
                <option value=''>=</option>
              </select>
              <input type='text' name='' id='' className='col-1 m-2' />
              <select className={`col-2 m-2`}>
                <option value=''> &gt;= </option>
                <option value=''> &lt;= </option>
                <option value=''> &lt; </option>
                <option value=''> &gt; </option>
                <option value=''>=</option>
              </select>
              <input type='text' name='' id='' className='col-1 ' />
            </Col>
          </Row>

          <Row>
            {formselect2.length &&
              [
                {
                  label: 'Win/Lose:',
                  option: (
                    <>
                      <option value=''> &gt;= </option>
                      <option value=''> &lt;= </option>
                      <option value=''> &lt; </option>
                      <option value=''> &gt; </option>
                      <option value=''>=</option>
                    </>
                  ),
                },
                {
                  label: 'Bonus:',
                  option: (
                    <>
                      <option value=''> &gt;= </option>
                      <option value=''> &lt;= </option>
                      <option value=''> &lt; </option>
                      <option value=''> &gt; </option>
                      <option value=''>=</option>
                    </>
                  ),
                },
                {
                  label: 'Jackpot betting:',
                  option: (
                    <>
                      <option value=''> &gt;= </option>
                      <option value=''> &lt;= </option>
                      <option value=''> &lt; </option>
                      <option value=''> &gt; </option>
                      <option value=''>=</option>
                    </>
                  ),
                },
                {
                  label: 'Jackpot price:',
                  option: (
                    <>
                      <option value=''> &gt;= </option>
                      <option value=''> &lt;= </option>
                      <option value=''> &lt; </option>
                      <option value=''> &gt; </option>
                      <option value=''>=</option>
                    </>
                  ),
                },
              ].map((d, i) => (
                <Col
                  key={i}
                  className={`${styles.betting_history_filter_item_height} ${styles.font17} ${styles.seagreenBg} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} `}
                >
                  <label className={`${styles.form_select_lable} col-4`}>{d.label} </label>
                  <select className={` py-1 col-3  m-2`}>{d.option}</select>
                  <input type='text' name='' id='' className='py-1 col-3  m-2' />
                </Col>
              ))}
          </Row>
        </Row>

        <FilterButton data={filterButton} label='Status:' />

        <Row className='mx-0 my-2'>
          <Col className={` ${styles.rounded2} py-2 text-center`}>
            <Button className={` mx-1 mb-1 bg-secondary px-5 ${styles.betting_history_rest_button}`}>Reset</Button>
            <Button className={`   ${styles.gradientBlue} mx-1 mb-1 px-4 ${styles.betting_history_yesterday_button}`}>Yesterday</Button>
            <Button className={`  ${styles.gradientBlue} mx-1 mb-1 px-4 ${styles.betting_today_rest_button}`}>Today</Button>
            <Button className={`  mx-1 bg-warning mb-1 px-4 ${styles.betting_history_search_button}`}>Search</Button>
          </Col>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <div className={`${styles.player_report_table_mainHeading} text-center p-2`}>
            <label className={`${styles.font18} text-light ${styles.fw700}`}>Betting History</label>
          </div>
          <Col className={`${styles.font18} p-2 mx-1 border-0`}>
            <ReportTable table_columns={columns} table_data={tableData} />
          </Col>
        </Row>
      </div>
    </>
  )
}

bettingHistory.auth = true
export default bettingHistory

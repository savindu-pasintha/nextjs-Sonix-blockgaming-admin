import React, { useEffect, useState } from 'react'
import styles from '../common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import { useStoreActions, useStoreState } from '../../../store/hooks'
import { PlayerListPayLoad } from '../../../store/interfaces/player.interface'
import MUIDataTable from 'mui-datatables'
import CompanyLogo from '../../../layout/CompanyLogo'
import FormSelect from '../../../components/form-field/select'
import ReportTable from '../../../components/ReportTable/ReportTable'

const playerList = () => {
  const [tableData, setTableData] = React.useState([])

  const columns = [
    'Player Name',
    'Group Level',
    'New Agent Group',
    'Registration Date',
    'Total Balance',
    'Total Recharge',
    'Total Withdrawal',
    'Last Login',
    'Status',
  ]

  const data = []

  const { currentBrand } = useStoreState(state => state.appStore)
  const payload = {
    brandCode: currentBrand ? currentBrand : 'sonicxgame',
  }

  const [playerListPayLoad, setPlayerListPayLoad] = useState<PlayerListPayLoad>(payload)

  const { getPlayerList } = useStoreActions(actions => actions.playerStore)

  useEffect(() => {
    if (currentBrand) {
      setPlayerListPayLoad({ ...playerListPayLoad, brandCode: currentBrand })
      getPlayerList(playerListPayLoad)
    }
  }, [currentBrand])

  const { playerList } = useStoreState(state => state.playerStore)

  if (playerList.length) {
    playerList.map(list => {
      const item = [
        list.playerName,
        list.groupLevel,
        list.newAgentGroup,
        list.registrationDate,
        list.totalBalance,
        list.totalRecharge,
        list.totalWithdrawal,
        list.lastLogin,
        list.status,
      ]
      data.push(item)
    })
  }

  const formselect2 = [
    {
      label: 'Type of date:',
      option: (
        <>
          <option>Tiem of last login</option> <option>f8a06</option>
        </>
      ),
    },
    {
      label: 'Agent level:',
      option: (
        <>
          <option></option> <option> GMT +0700</option>
        </>
      ),
    },
    {
      label: 'Status:',
      option: (
        <>
          <option></option> <option> option</option>
        </>
      ),
    },
    {
      label: 'Payment cycle:',
      option: (
        <>
          <option></option> <option> option</option>
        </>
      ),
    },
  ]

  const formselect3 = [
    {
      label: 'Label name:',
      option: (
        <>
          <option>Enter to select</option> <option> option</option>
        </>
      ),
    },
    {
      label: 'Confirm sms:',
      option: (
        <>
          <option>All</option> <option> option</option>
        </>
      ),
    },
    {
      label: 'VIP Level:',
      option: (
        <>
          <option>All</option> <option> option</option>
        </>
      ),
    },
  ]

  React.useEffect(() => {
    var ar = []
    for (let i = 0; i < 5; i++) {
      var itm = [
        { value: (Math.random(100) * 10).toFixed(0) + '11212d', color: '' },
        { value: 'VIPO', color: '' },
        { value: 'SamelP,Eako', color: 'red' },
        { value: 'dung' + (Math.random(100) * 100).toFixed(0), color: '' },
        { value: '2021-12-08', color: '' },
        { value: (Math.random(100) * 1000).toFixed(2), color: '' },
        { value: (Math.random(100) * 1000).toFixed(2), color: '' },
        { value: '2022-05-18 00:34:06', color: '' },
        { value: 'Activated', color: '#4BAE28' },
      ]
      ar.push(itm)
    }
    setTableData(ar)
  }, [])
  return (
    <>
      <CompanyLogo logo_src={'/images/logo_for_agent_group.png'} />
      <div className='mb-3  pb-5' style={{ backgroundColor: 'none' }}>
        <div className={`d-flex pb-2`}>
          <Row className={`col-12 mx-0 ${styles.player_report_row}`}>
            <Col className='px-5 pb-4 col-12 text-center '>
              <div className={`${styles.player_report_text_container} `}>
                <span className={`${styles.player_report_text} `}>Player List</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`mx-0  text-center ${styles.player_report_row_background}`}>
          <span className={`${styles.player_report_search_text} p-2`}>Search</span>
        </Row>

        <Row className={`mx-0 d-flex justify-content-around ${styles.player_report_row_background}`}>
          <Row>
            <FormSelect
              data={[
                {
                  label: 'Type of date:',
                  option: (
                    <>
                      <option>Time of last login</option> <option> option</option>
                    </>
                  ),
                },
              ]}
            />

            <Col
              //className={`my-2 mx-0  py-2 ${styles.player_list_two_input_box_container}`}
              className={` ${styles.filterdiv} my-2 mx-2  col-xl-3 col-md-6 col-12 py-2`}
            >
              <input type='text' placeholder='2022-05-01 Monday 00:00:00' className={` ${styles.player_list_input}`} />
              <input type='text' placeholder='2022-05-02 Monday 00:00:00' className={` ${styles.player_list_input}`} name='' id='' />
            </Col>

            <FormSelect
              data={[
                {
                  label: 'Settlement type: ',
                  option: (
                    <>
                      <option>Total amount</option> <option> option</option>
                    </>
                  ),
                },
              ]}
            />

            <Col className={`my-2 mx-0  py-2`}>
              {' '}
              <input type='text' placeholder='From' className={` ${styles.player_list_input}`} />
              <input type='text' placeholder='To' className={` ${styles.player_list_input}`} name='' id='' />
            </Col>
          </Row>

          <Row>
            <FormSelect
              data={[
                {
                  label: 'Search type:',
                  option: (
                    <>
                      <option>Member account</option> <option> option</option>
                    </>
                  ),
                },
              ]}
            />
            <Col
              className={`${styles.font17} ${styles.filterdiv} my-2 mx-2 ${styles.fontBlue} ${styles.rounded2} col-xl-3 col-md-6 col-12 py-2`}
            >
              <select className={`${styles.commonSelect} py-1 col-6 px-3`}>
                <option>Exact search</option> <option> option</option>
              </select>
            </Col>
            <FormSelect
              data={[
                {
                  label: 'Status:',
                  option: (
                    <>
                      <option>All</option> <option> option</option>
                    </>
                  ),
                },
                {
                  label: 'Agent level:',
                  option: (
                    <>
                      <option>Select</option> <option> option</option>
                    </>
                  ),
                },
              ]}
            />
          </Row>
          <Row>
            <FormSelect data={formselect3}></FormSelect>
          </Row>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <Col className={`${styles.font17} ${styles.rounded2} py-2 text-center`}>
            <Button
              style={{ backgroundColor: '#BDBDBD' }}
              className={` mx-2 mb-1 ${styles.betting_history_reset_button}`}
              onClick={() => {}}
            >
              Reset
            </Button>
            <Button className={` ${styles.player_list_search_button}  ${styles.gradientBlue} mb-1 px-5`} onClick={() => {}}>
              Search
            </Button>
          </Col>
        </Row>

        <Row className={`mx-0 my-2 ${styles.player_report_row_background}`}>
          <div className={`${styles.player_report_table_mainHeading} text-center p-2`}>
            <label className={`${styles.font18} text-light ${styles.fw700}`}></label>
          </div>
          <Col className={`${styles.font18} p-2 mx-1 border-0`}>
            <ReportTable table_columns={columns} table_data={tableData} />
          </Col>
        </Row>
      </div>
    </>
  )
}

playerList.auth = true
export default playerList

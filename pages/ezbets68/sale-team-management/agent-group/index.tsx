import React, { useEffect, useState } from 'react'
import styles from '../../common.module.css'
import { Row, Col, Button } from 'react-bootstrap'
import MUIDataTable from 'mui-datatables'
import FormSelect from '../../../../components/form-field/select'
import { useStoreActions, useStoreState } from '../../../../store/hooks'
import { AgentListPayLoad } from '../../../../store/interfaces/agent.interface'
import ReportTable from '../../../../components/ReportTable/ReportTable'
import CompanyLogo from '../../../../layout/CompanyLogo'
const agentGroup = () => {
  const [tableData, setTableData] = React.useState([])
  const columns = [
    'id agent',
    'agent level',
    'payment cycle',
    'low lumber of agent',
    'total number of players',
    'status',
    'last updated',
    'node',
    'operation',
  ]
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
      label: 'Filter:',
      option: (
        <>
          <option></option> <option>f8a06</option>
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
      <CompanyLogo logo_src={'/images/logo_for_agent_group.png'} />
      <div className='mb-3 pb-5'>
        <div className={`d-flex pb-2`}>
          <Row className={`col-12 mx-0 ${styles.player_report_row}`}>
            <Col className='px-5 pb-4 col-12 text-center '>
              <div className={`${styles.player_report_text_container} `}>
                <span className={`${styles.player_report_text} `}> Agent Group</span>
              </div>
            </Col>
          </Row>
        </div>

        <Row className={`mx-0  text-center ${styles.player_report_row_background}`}>
          <span className={`${styles.player_report_search_text} p-2`}>Tìm kiếm</span>
        </Row>

        <Row className={`mx-0 d-flex justify-content-around ${styles.player_report_row_background}`}>
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
            <label className={`${styles.font18} text-light ${styles.fw700}`}>Agent Group</label>
          </div>
          <Col className={`${styles.font18} p-2 mx-1 border-0`}>
            <ReportTable table_columns={columns} table_data={tableData} />
          </Col>
        </Row>
      </div>
    </>
  )
}

agentGroup.auth = true
export default agentGroup

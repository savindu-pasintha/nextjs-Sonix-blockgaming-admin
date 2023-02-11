import React, { useRef, useState, useEffect } from 'react'
import PageSectionHead from '../PageSectionHead/PageSectionHead'
import styles from '../../pages/ezbets68/common.module.css'
const PageSectionHeaderTabs = ({ title = 'Title :', tabNames, handleChangeTabs }) => {
  const changeStyleAfterClick = useRef(false)
  const [tabColor, setTabColor] = useState(styles.page_section_header_tab)

  useEffect(() => {}, [tabColor])
  return (
    <div className='row p-0 m-0 '>
      <div className='d-flex flex-row'>
        <h6 className={' text-center px-3 m-0 ' + `${styles.page_section_header_tab_h}`}>{title}</h6>
        {tabNames &&
          tabNames.length > 0 &&
          tabNames.map((name, ind) => {
            return (
              name && (
                <div key={ind} className={`m-0 p-0`}>
                  <span
                    className={`text-center px-2 mx-1 ${styles.page_section_header_tab}`}
                    id={`tab${ind}`}
                    onClick={e => {
                      tabNames.map((itm, i) => {
                        if (i == ind) {
                          document.getElementById(`tab${ind}`).style.color = '#ffffff'
                          document.getElementById(`tab${ind}`).style.background = `url('/images/header_bg.png')`
                          document.getElementById(`tab${ind}`).style.backgroundSize = `cover !important`
                        } else {
                          document.getElementById(`tab${i}`).style.color = '#273B4A'
                          document.getElementById(`tab${i}`).style.removeProperty('background')
                          document.getElementById(`tab${i}`).style.backgroundColor = '#fffff'
                        }
                      })
                      handleChangeTabs(name)
                      setTabColor(ind)
                    }}
                    onMouseEnter={e => {}}
                  >
                    {name}
                  </span>
                </div>
              )
            )
          })}
      </div>
    </div>
  )
}

export default PageSectionHeaderTabs

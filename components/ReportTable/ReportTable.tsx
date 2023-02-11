import * as React from 'react'
import Paper from '@mui/material/Paper'
import { AiFillEye } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'
import styles from '../../pages/ezbets68/common.module.css'
import Table from 'react-bootstrap/Table'
import { RiArrowRightSLine, RiArrowLeftSLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function ReportTable({ table_columns, table_data, last_column_enable = true }) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [tableColumns, setTableColumns] = React.useState([])
  const [tableData, setTableData] = React.useState([])
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className={` p-0 mx-0 container`}>
      <div className={`row mx-2 ${styles.parent_column_row_style}`}>
        {/* <div className={`${styles.parent} ${styles.parent_column_row_style}`}> */}
        {table_columns.map(
          (column, ind) =>
            column && (
              <div className={`col py-2`} key={ind}>
                <div>
                  <p className={`${styles.report_table_row_header_item}`}>{column}</p>
                </div>
              </div>
            ),
        )}
        {last_column_enable && (
          <div className={`col py-2`}>
            <div>
              <p className={`${styles.report_table_row_header_item} `}>
                <AiFillEye />
              </p>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
      <>
        {table_data.map((row, ind) => (
          // <div className={`${styles.parent} ${styles.parent_row_style}`} key={ind}>
          <div className={`row mx-2 ${styles.parent_row_style}`}>
            {' '}
            {row.map((obj, indd) =>
              indd == 0 ? (
                obj?.value != (null || undefined) && (
                  <div className={`col py-2`} key={indd}>
                    <div>
                      <p
                        className={`${styles.report_table_row_header_item} ${styles.report_table_underline_column} `}
                        style={{ color: obj?.color ? obj.color : '' }}
                      >
                        {obj?.value}
                      </p>
                    </div>
                  </div>
                )
              ) : (
                <div className={`col py-2`}>
                  {obj?.value != (null || undefined) && typeof obj?.value == ('string' || 'number') ? (
                    <div>
                      <p className={`${styles.report_table_row_header_item}`} style={{ color: obj.color ? obj.color : '' }}>
                        {obj?.value && obj?.value.includes(',') ? (
                          <>
                            <span style={{ color: obj.color }}>{obj?.value.split(',')[0]}</span>
                            <span style={{ color: 'black' }}>,{obj?.value.split(',')[1]}</span>
                          </>
                        ) : (
                          <span>{obj?.value}</span>
                        )}
                      </p>
                    </div>
                  ) : (
                    <>{obj?.value}</>
                  )}
                </div>
              ),
            )}
            {last_column_enable && (
              <div className={`col py-2`}>
                <div>
                  <p className={`${styles.report_table_row_header_item}`}>
                    <GrAdd />
                  </p>
                </div>
              </div>
            )}
            {/* </div> */}
          </div>
        ))}
      </>

      <div className='float-right'>
        <div className='row d-block '>
          <div className='d-flex '>
            {' '}
            <div className={`${styles.report_table_pagination_left_right_arrow}`}>
              <RiArrowLeftSLine style={{ color: 'black' }} />
            </div>
            <div className='d-flex'>
              <span className={`${styles.report_table_pagination_text_page}`}>Page {rowsPerPage}</span>
              <RiArrowDownSLine style={{ color: 'black' }} />
            </div>
            <div className={`${styles.report_table_pagination_left_right_arrow}`}>
              <RiArrowRightSLine style={{ color: 'black' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*

import * as React from 'react'
import Paper from '@mui/material/Paper'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TablePagination from '@mui/material/TablePagination'
// import TableRow from '@mui/material/TableRow'
import { AiFillEye } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'
import styles from '../../pages/ezbets68/common.module.css'
import Table from 'react-bootstrap/Table'
import { RiArrowRightSLine, RiArrowLeftSLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function ReportTable({ table_columns, table_data, last_column_enable = true }) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [tableColumns, setTableColumns] = React.useState([])
  const [tableData, setTableData] = React.useState([])
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className={`w-100 p-0 mx-0`}>
      <div className={`${styles.parent_wrapper}`}>
        <div className={`${styles.parent} ${styles.parent_column_row_style}`}>
          {table_columns.map(
            (column, ind) =>
              column && (
                <div className={`${styles.child}`} key={ind}>
                  <div>
                    <p
                    // className={`${styles.report_table_row_header_item}`}
                    >
                      {column}
                    </p>
                  </div>
                </div>
              ),
          )}
          {last_column_enable && (
            <div className={`${styles.child}`}>
              <div>
                <p
                // className={`${styles.report_table_row_header_item} `}
                >
                  <AiFillEye />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.parent_wrapper}`}>
        {table_data.map((row, ind) => (
          <div className={`${styles.parent} ${styles.parent_row_style}`} key={ind}>
            {row.map((obj, indd) =>
              indd == 0 ? (
                obj.value != (null || undefined) && (
                  <div className={`${styles.child}`} key={indd}>
                    <div>
                      <p
                        // className={`${styles.report_table_row_header_item} ${styles.report_table_underline_column} `}
                        style={{ color: obj.color ? obj.color : '' }}
                      >
                        {obj?.value}
                      </p>
                    </div>
                  </div>
                )
              ) : (
                <div className={`${styles.child}`}>
                  {obj.value != (null || undefined) && typeof obj.value == ('string' || 'number') ? (
                    <div>
                      <p
                      // className={`${styles.report_table_row_header_item}`} style={{ color: obj.color ? obj.color : '' }}
                      >
                        {obj.value && obj.value.includes(',') ? (
                          <>
                            <span style={{ color: obj.color }}>{obj.value.split(',')[0]}</span>
                            <span style={{ color: 'black' }}>,{obj.value.split(',')[1]}</span>
                          </>
                        ) : (
                          <span>{obj.value}</span>
                        )}
                      </p>
                    </div>
                  ) : (
                    <>{obj.value}</>
                  )}
                </div>
              ),
            )}

            {last_column_enable && (
              <div className={`${styles.child}`}>
                <div>
                  <p
                  //  className={`${styles.report_table_row_header_item}`}
                  >
                    <GrAdd />
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='float-right'>
        <div className='row d-block '>
          <div className='d-flex '>
            {' '}
            <div className={`${styles.report_table_pagination_left_right_arrow}`}>
              <RiArrowLeftSLine style={{ color: 'black' }} />
            </div>
            <div className='d-flex'>
              <span className={`${styles.report_table_pagination_text_page}`}>Page {rowsPerPage}</span>
              <RiArrowDownSLine style={{ color: 'black' }} />
            </div>
            <div className={`${styles.report_table_pagination_left_right_arrow}`}>
              <RiArrowRightSLine style={{ color: 'black' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


*/

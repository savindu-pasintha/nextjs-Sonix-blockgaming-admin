import {DataTablePaginationProps, DataTableProps, DataTableTotalProps, TableData} from "../../utils/interface";
import {useEffect, useState} from "react";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer, TableFooter,
  TableHead, TablePagination,
  TableRow
} from "@mui/material";
import BlockLoading from "../layout/BlockLoading";

const DataTable = (props: DataTableProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<DataTablePaginationProps>({
    page: 0,
    pageSize: 25,
  });

  const [sum, setSum] = useState<DataTableTotalProps>({
    colSpan: 3,
    total: 0,
  });

  const [total, setTotal] = useState<number>(0);
  const [rows, setRows] = useState<any[]>([]);

  const handleChangePagination = (newValue: number, field: string) => {
    setPagination({
      ...pagination,
      [field]: newValue
    });
  }

  const reloadData = () => {
    setLoading(true);
    props.fetchData(pagination).then((data: TableData) => {
      setLoading(false);
      setRows(data.rows);
      setTotal(data.total);
      if (data.sum) {
        setSum(data.sum);
      } else {
        setSum({total: 0, colSpan: 0});
      }
    });
  }

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[100],
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }));

  useEffect(() => {
    reloadData();
    // eslint-disable-next-line
  }, [pagination, props.refreshData]);

  return (
    <div className="overflow-auto rounded shadow whitespace-nowrap">
      <TableContainer
        translate={"no"}
        className={`w-full text-sm text-center border-collapse table-auto table-striped bg-gray-200`}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {props.columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth}}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {loading ?
              <tr>
                <td colSpan={props.columns.length}>
                  <BlockLoading/>
                </td>
              </tr>
              : (
              rows.map((item: any) => {
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                  {props.columns.map((column) => {
                    const value = item[column.id] ?? '';
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {typeof value === 'number' ?
                          (column.formatNumber ? column.formatNumber(value, item) : value)
                          : (column.formatString ? column.formatString(value, item) : value)}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
              })
            )}
          </TableBody>
          {sum.total ? (
            <TableFooter>
              <StyledTableRow>
                <StyledTableCell key={'total'} align={'right'} colSpan={sum.colSpan}>Total</StyledTableCell>
                <StyledTableCell key={'total_value'} colSpan={props.columns.length - sum.colSpan}>
                  {props.totalFormat ? props.totalFormat(sum.total) : sum.total}
                </StyledTableCell>
              </StyledTableRow>
            </TableFooter>
          ) : null}
        </Table>
      </TableContainer>
      {total > 0 && (
        <TablePagination
          className={"bg-gray-200"}
          // classes={{
          //   root: classes.pagination
          // }}
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={total}
          rowsPerPage={pagination.pageSize}
          page={pagination.page}
          onRowsPerPageChange={(event) => handleChangePagination(+event.target.value, 'pageSize')}
          onPageChange={(event, newValue) => handleChangePagination(newValue, 'page')}/>
      )}
    </div>
  );
}

export default DataTable;

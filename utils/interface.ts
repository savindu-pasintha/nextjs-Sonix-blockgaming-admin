import {ReactNode} from 'react';

export interface RouteInterface {
  path: string;
  name: string;
  icon?: string;
  children?: RouteInterface[];
}

export interface ElementPropsInterface {
  sx?: any;
  children?: ReactNode;
}

export interface SideBarPropsInterface extends ElementPropsInterface {
  routes: RouteInterface[];
  activeColor?: string;
}

export interface LayoutPropsInterface extends ElementPropsInterface {
  bgImage?: string;
  bgColor?: string;
}

export type DateRangeType = 'currentMonth' | 'lastMonth' | 'currentWeek' | 'lastWeek' | '-7days';
export type GroupType = 'date' | 'week';

export interface QueryInterface {
  provider: string;
  prefix?: string;
  search?: string;
  date_range?: DateRangeType;
  start?: number,
  end?: number,
  group?: GroupType;
  page_size?: number;
  page?: number;
}

export interface DateTimeRangeInterface {
  start: number;
  end: number;
}

export type DataTableColumnId = 'tid' | 'type' | 'userId' | 'userName' | 'gameId' | 'gameName' | 'tableId' |
  'tableName' | 'roundId' | 'amount' | 'createdTime' | 'isUpdated' | 'updateText' | 'playTypeId' | 'playType' | 'gameResult'
  ;

export interface DataTableColumn {
  id: DataTableColumnId;
  label: string;
  minWidth?: number;
  align?: 'right';
  formatNumber?: (value: number, item?: any) => string;
  formatString?: (value: string, item?: any) => string | JSX.Element;
}

export interface DataTablePaginationProps {
  page: number;
  pageSize: number;
  query?: URLSearchParams;
}

export interface DataTableTotalProps {
  colSpan: number,
  total: number,
  format?: (value: number) => string
}

export interface TableData {
  rows: any[];
  total: number,
  sum?: DataTableTotalProps
}

export interface DataTableProps {
  columns: DataTableColumn[];
  fetchData: (pagination: DataTablePaginationProps) => Promise<TableData>,
  totalFormat?: (value: number) => string,
  refreshData?: boolean,
}

export interface BrandInterface {
  code: string;
  prefix: string;
  casino: string[];
  domain: string;
}

export interface CommonUserInterface {
  userId: number;
  userName: string;
  email: string;
  fullName?: string;
  website?: string;
  brand: BrandInterface;
}

export interface AgentInterface {
  userId: number;
  userName: string;
  email: string;
  fullName?: string;
  website?: string;
  brand: BrandInterface;
}

export interface ProviderInterface {
  code: string;
  name: string;
}

export const UnauthorizedCommonUser: CommonUserInterface = {
  userId: 0,
  userName: 'unauthorized_user',
  email: 'nobody@sonicxgame.com',
  fullName: 'UnAuthorized User',
  brand: {
    code: 'sonicxgame',
    prefix: 'v00_',
    casino: [],
    domain: 'sonicxgame.com',
  },
};

export interface PaginatorInterface {
  transactionCount: number;
  perPage: number;
  currentPage: number;
  pageCount: number;
  next?: number;
  prev?: number;
  slNo?: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface TransactionInterface {
  id: string;
  tid: string[];
  type: string;
  userId: string;
  userName: string;
  gameId: string;
  gameName: string;
  tableId: string;
  tableName: string;
  roundId: string;
  amount: number;
  createdTime: number;
  isUpdated: boolean;
  updateText: string;
  playTypeId?: string;
  playType?: string;
  gameResult?: string;
}

export interface TransactionPaginationInterface {
  transactions: TransactionInterface[];
  paginator: PaginatorInterface;
}

export const EmptyHistory: TransactionPaginationInterface = {
  transactions: [],
  paginator: {
    transactionCount: 0,
    perPage: 25,
    currentPage: 0,
    pageCount: 0,
    hasNextPage: false,
    hasPrevPage: false,
  }
}

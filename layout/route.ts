import {RouteInterface} from '../utils/interface';

export const MemberManagementCreateRoute: RouteInterface = {
  path: '/member-management/create',
  name: 'Create Member/Player',
  icon: '',
};

export const SalesTeamRoute: RouteInterface = {
  path: '/sale-team-management/agent-group',
  name: 'Agent List',
  icon: '',
};

export const AgentInfoRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/agent-information',
  name: 'Agent Information',
  icon: '',
};

export const CreateAgentRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-agent',
  name: 'Create Agent',
  icon: '',
};

export const CreateMemberRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-member',
  name: 'Create Member',
  icon: '',
};

export const TransactionLogsRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-member',
  name: 'Transaction Logs',
  icon: '',
};

export const BettingHistoryRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-member',
  name: 'Betting History',
  icon: '',
};

export const MemberInfoRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-member',
  name: 'Member Info',
  icon: '',
};

export const PlayerListRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-member',
  name: 'Player List',
  icon: '',
};

export const PlayerReportRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-member',
  name: 'Player Report',
  icon: '',
};

export const SaleTeamCommissionRoute: RouteInterface = {
  path: '/sale-team-management/agent-group/create-member',
  name: 'Sale Team Commission',
  icon: '',
};

export const DashboardRoute: RouteInterface = {
  path: '/dashboard',
  name: 'Dashboard',
  icon: 'dashboard_outlined',
};

export const LoginRoute: RouteInterface = {
  path: '/auth/login',
  name: 'Login',
  icon: '',
};

export const ProfileRoute: RouteInterface = {
  path: '/user/profile',
  name: 'Profile',
  icon: 'person_outlined',
};

export const UserPasswordRoute: RouteInterface = {
  path: '/user/password',
  name: 'Change password',
  icon: 'person_outlined',
};

export const routes: RouteInterface[] = [
  DashboardRoute,
  {
    path: '/livebet',
    name: 'Live Bet',
    icon: 'casino_outlined_icon',
  }
];

export const AccountBalanceRoute: RouteInterface = {
  path: '/account/balance',
  name: 'Balance',
  icon: '',
};

export const AccountWithdrawRoute: RouteInterface = {
  path: '/account/withdraw',
  name: 'Withdraw',
  icon: '',
};
export const AccountDepositeRoute: RouteInterface = {
  path: '/account/deposit',
  name: 'Deposit',
  icon: '',
};

export const AccountTransferRoute: RouteInterface = {
  path: '/account/transfer',
  name: 'Transfer',
  icon: '',
};
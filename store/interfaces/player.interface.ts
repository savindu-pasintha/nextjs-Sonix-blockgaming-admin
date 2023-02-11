export interface IBrand {
  code: string;
  prefix: string;
  casino: string[];
  domain: string;
}

export interface IPlayer {
  userId: number;
  info?: string;
  playerName: string;
  groupLevel: string;
  newAgentGroup: string;
  registrationDate: string;
  totalBalance: string
  totalRecharge: string;
  totalWithdrawal: string;
  lastLogin: string;
  status: string;
  brand: IBrand;
}

export interface IPlayerReport {
  userId: number;
  memberAccount?: string;
  agentLevel: string;
  realName: string;
  nameLabel: string;
  newAgentGroup: string;
  numberOfRecharges: string
  numberOfWithdrawals: string;
  withdrawalAmount: string;
  manualAdjustment: string;
  totalBetAmount: string;
  brand: IBrand;
}

export interface IPlayerReport {
  userId: number;
  memberAccount?: string;
  agentLevel: string;
  realName: string;
  nameLabel: string;
  newAgentGroup: string;
  numberOfRecharges: string
  numberOfWithdrawals: string;
  withdrawalAmount: string;
  manualAdjustment: string;
  totalBetAmount: string;
  brand: IBrand;
}

export interface IBettingHistory {
  userId: number;
  betTime: string;
  statisticalTime: string;
  transactionID: string;
  matchIDNumber: string;
  gameHouse: string;
  game: string
  memberAccount: string;
  betAmount: string;
  validBets: string;
  winLose: string;
  brand: IBrand;
}

export const UnauthorizedPlayer: IPlayer = {
  userId: 0,
  playerName: 'unauthorized_user',
  groupLevel: 'unknown',
  newAgentGroup: 'unknown',
  registrationDate: 'unknown',
  totalBalance: 'unknown',
  totalRecharge: 'unknown',
  totalWithdrawal: 'unknown',
  lastLogin: 'unknown',
  status: 'Deactivated',
  brand: {
    code: 'sonicxgame',
    prefix: 'v00_',
    casino: [],
    domain: 'sonicxgame.com',
  },
};

export const UnauthorizedPlayerList: IPlayer[] = [];
export const UnauthorizedPlayerReport: IPlayerReport[] = [];
export const UnauthorizedBettingHistory: IBettingHistory[] = [];

export interface PlayerListPayLoad {
  brandCode?: string
}
export interface PlayerReportPayLoad {
  brandCode?: string
}
export interface BettingHistoryPayLoad {
  brandCode?: string
}
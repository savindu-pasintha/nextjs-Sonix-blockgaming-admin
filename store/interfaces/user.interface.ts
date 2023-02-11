export interface IBrand {
  code: string;
  prefix: string;
  casino: string[];
  domain: string;
}

export interface IUser {
  userId: number;
  userName: string;
  email: string;
  fullName?: string;
  website?: string;
  brand: IBrand;
}

export interface IComReport {
  userId: number;
  realName: string;
  agentLevel: string;
  activeUsers: string;
  effectiveBets: string;
  totalAffiliatedRevenue: string;
  totalOnlineMemberProfit: string;
  costAllocation: string;
  selfRose: string;
  subordinateCommission: string;
  totalBonus: string;
  brand: IBrand;
}

export const UnauthorizedUser: IUser = {
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

export const UnauthorizedComReport: IComReport[] = [];

export interface ComReportPayLoad {
  brandCode?: string
}

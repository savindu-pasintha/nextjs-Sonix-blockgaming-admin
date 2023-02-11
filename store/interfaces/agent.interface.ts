export interface IBrand {
  code: string;
  prefix: string;
  casino: string[];
  domain: string;
}

export interface IAgent {
  userId: number;
  userName: string;
  email: string;
  fullName?: string;
  phone?: string;
  brand: IBrand;
}

export interface IAgentReport {
  userId: number;
  realName: string;
  agentLevel: string;
  downstreamAgents: string;
  totalSubscribers: string;
  totalPlayers: string;
  duplicateBettors: string;
  depositOrder: string;
  firstDeposit: string;
  depositAmount: string;
  withdrawalAmount: string;
  manualAdjustment: string;
  brand: IBrand;
}

export interface CreateAgent {
  userName: string;
  email: string;
  password: string;
  confirm_password: string;
  fullName?: string;
  phone?: string;
  brandCode: string;
}

export const UnauthorizedAgent: IAgent = {
  userId: 0,
  userName: 'unauthorized_user',
  email: 'nobody@sonicxgame.com',
  fullName: 'UnAuthorized User',
  phone: '9876543210',
  brand: {
    code: 'sonicxgame',
    prefix: 'v00_',
    casino: [],
    domain: 'sonicxgame.com',
  },
};
export const UnauthorizedAgentList: IAgent[] = [];
export const UnauthorizedAgentReport: IAgentReport[] = [];


export interface AgentListPayLoad {
  brandCode?: string
}
export interface AgentReportPayLoad {
  brandCode?: string
}
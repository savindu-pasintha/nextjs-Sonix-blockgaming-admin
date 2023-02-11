export interface IBrand {
    code: string;
    prefix: string;
    casino: string[];
    domain: string;
}

export interface ITransLogs {
    dayTrading: string;
    transactionType: string;
    memberAccount: string;
    transactionAmount: string;
    beforeSettlement: string;
    balanceAfterTransaction: string;
    brand: IBrand;
}

export const UnauthorizedTransLogs: ITransLogs[] = [];

export interface TransLogsPayLoad {
    brandCode?: string
}

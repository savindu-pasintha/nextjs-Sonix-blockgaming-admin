import {action, Action, thunk, Thunk} from 'easy-peasy';
import {RootStore} from './root.store';
import {get as getRequest} from '../api';
import {EmptyHistory, QueryInterface, TransactionPaginationInterface} from "../../utils/interface";

interface ProviderState {
  providerProfit: any;
}

interface ProviderActions {
  setProviderProfit: Action<this, any>;
}

interface ProviderThunks {
  getProfit: Thunk<this, QueryInterface, undefined, RootStore>;
  getTransactions: Thunk<this, QueryInterface, undefined, RootStore>;
}

export interface ProviderStore extends ProviderState, ProviderActions, ProviderThunks {}

const providerStore: ProviderStore = {
  providerProfit: {},
  /**
   * ACTIONS
   */
  setProviderProfit: action((state, payload) => {
    if (typeof state.providerProfit[payload.brand] === 'undefined') {
      state.providerProfit[payload.brand] = payload.data;
    } else {
      Object.assign(state.providerProfit[payload.brand], payload.data);
    }
  }),

  /**
   * THUNKS
   */
  getProfit: thunk(async (_, query, __) => {
    const response = await getRequest({
      url: '/providers/profit',
      body: query,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  }),

  getTransactions: thunk(async (_, query, __): Promise<TransactionPaginationInterface> => {
    const response = await getRequest({
      url: '/providers/transactions',
      body: query,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return EmptyHistory;
    }
  }),
};

export default providerStore;

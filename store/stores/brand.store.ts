import {action, Action, thunk, Thunk} from 'easy-peasy';
import {RootStore} from './root.store';
import {get as getRequest} from '../api';
import {BrandInterface} from "../../utils/interface";

interface BrandState {
  brands: BrandInterface[];
}

interface BrandActions {
  setBrandList: Action<this, BrandInterface[]>;
}

interface BrandThunks {
  getBrandList: Thunk<this, undefined, undefined, RootStore>;
}

export interface BrandStore extends BrandState, BrandActions, BrandThunks {}

const brandStore: BrandStore = {
  brands: [],
  /**
   * ACTIONS
   */
  setBrandList: action((state, payload) => {
    state.brands = payload;
  }),

  /**
   * THUNKS
   */
  getBrandList: thunk(async (_, __, stores) => {
    const response = await getRequest({
      url: '/brands',
    });

    if (response.status === 200) {
      const {setBrandList} = stores.getStoreActions().brandStore;
      setBrandList(response.data);
    }
  })
};

export default brandStore;

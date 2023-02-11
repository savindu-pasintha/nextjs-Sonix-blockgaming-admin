import {action, Action, thunk, Thunk} from 'easy-peasy';
import {RouteInterface} from '../../utils/interface';
import {RootStore} from './root.store';
import { get as getRequest } from '../api';
import {DashboardRoute} from '../../layout/route';

interface AppState {
  showMobileMenu: boolean;
  showLoader: boolean;
  selectedLang: string;
  currentBrand: string;
  currentRoute: RouteInterface;
  redirect: string;
}

interface AppActions {
  toggleLoader: Action<this, boolean>;
  setLang: Action<this, string>;
  setBrand: Action<this, string>;
  toggleMobileMenu: Action<this, boolean>;
  setCurrentRoute: Action<this, RouteInterface>;
  setCurrentBrand: Action<this, string>;
  setRedirect: Action<this, string>;
}

interface AppThunks {
  getBrandCode: Thunk<this, undefined, undefined, RootStore>
}

export interface AppModel extends AppState, AppActions, AppThunks {}

const appStore: AppModel = {
  showMobileMenu: false,
  showLoader: false,
  selectedLang: "English",
  currentBrand: '',
  currentRoute: DashboardRoute,
  redirect: '',

  /**
   * ACTIONS
   */
  setLang: action((state, payload) => {
    state.selectedLang = payload;
  }),
  toggleLoader: action((state, payload) => {
    state.showLoader = payload;
  }),
  setBrand: action((state, payload) => {
    state.currentBrand = payload;
  }),
  toggleMobileMenu: action((state, payload) => {
    state.showMobileMenu = payload;
  }),
  setCurrentRoute: action((state, payload) => {
    state.currentRoute = payload;
  }),
  setCurrentBrand: action((state, payload) => {
    state.currentBrand = payload;
  }),
  setRedirect: action((state, payload) => {
    state.redirect = payload;
  }),

  /**
   * Thunks
   */
  getBrandCode: thunk(async (_, __, ___) => {
    const response = await getRequest({
      url: '/brands/all'
    });

    if (response && response.status === 200) {
      // eslint-disable-next-line no-console
      console.log('get brand code', response.data);
      return response.data;
    } else {
      return [];
    }
  }),
};

export default appStore;

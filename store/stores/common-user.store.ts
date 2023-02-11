import {action, Action, thunk, Thunk} from 'easy-peasy';
import {RootStore} from './root.store';
import {get as getRequest, post as postRequest, put as putRequest} from '../api';
import {CommonUserInterface, UnauthorizedCommonUser} from "../../utils/interface";
import {UpdatePasswordInterface} from "../interfaces/auth.interface";

interface CommonUserState {
  commonUser: CommonUserInterface;
}

interface CommonUserActions {
  setCommonUser: Action<this, any>;
}

interface CommonUserThunks {
  getCommonUserProfile: Thunk<this, undefined, undefined, RootStore>;
  updatePassword: Thunk<this, UpdatePasswordInterface, undefined, RootStore>
}

export interface CommonUserStore extends CommonUserState, CommonUserActions, CommonUserThunks {}

const commonUserStore: CommonUserStore = {
  commonUser: UnauthorizedCommonUser,

  /**
   * ACTIONS
   */
  setCommonUser: action((state, payload) => {
    state.commonUser = payload;
  }),

  /**
   * THUNKS
   */
  getCommonUserProfile: thunk(async (actions, _, stores) => {
    try {
      const response = await getRequest({
        url: '/common-users/me',
      });

      if (response.status === 200) {
        actions.setCommonUser(response.data);
        // Load brand list if admin login
        if (response.data.role === 'role_company_admin') {
          await stores.getStoreActions().brandStore.getBrandList();
        }
      }
    } catch (e) {
      return e;
    }
  }),

  updatePassword: thunk(async (_, payload, __) => {
    return await putRequest({
      url: '/common-users/password',
      body: payload,
    });
  })
};

export default commonUserStore;

import {action, Action, thunk, Thunk} from 'easy-peasy';
import {RootStore} from './root.store';
import {get as getRequest, post as postRequest, put as putRequest} from '../api';
import {IUser,IComReport,ComReportPayLoad, UnauthorizedUser, UnauthorizedComReport} from "../interfaces/user.interface";

interface UserState {
  user: IUser;
  comReport: IComReport[]; 
} 

interface UserActions {
  setUser: Action<this, any>;
  setComReport: Action<this, any>;
}

interface UserThunks {
  getUserProfile: Thunk<this, undefined, undefined, RootStore>;
  getComReport: Thunk<this, ComReportPayLoad, undefined, RootStore>;
}

export interface UserStore extends UserState, UserActions, UserThunks {}

const userStore: UserStore = {
  user: UnauthorizedUser,
  comReport: UnauthorizedComReport,

  /**
   * ACTIONS
   */

  setUser: action((state, payload) => {
    state.user = payload;
  }),
  setComReport: action((state, payload) => {
    state.comReport = payload;
  }),

  /**
   * THUNKS
   */
  getUserProfile: thunk(async (actions, _, stores) => {
    try {
      const response = await getRequest({
        url: '/users/me',
      });

      if (response.status === 200) {
        actions.setUser(response.data);
      }
    } catch (e) {
      return e;
    }
  }),

  getComReport: thunk(async (actions, _, stores) => {
    try {
      const response = await getRequest({
        url: '/sale-team-commission/me',
      });

      if (response.status === 200) {
        actions.setUser(response.data);
      }
    } catch (e) {
      return e;
    }
  })
};

export default userStore;

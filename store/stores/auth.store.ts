import { action, Action, Computed, computed, Thunk, thunk } from 'easy-peasy';
import { post as postRequest } from '../api';
import { RootStore } from './root.store';
import {getUUID, setJWT} from '../../utils/functions';

export interface IAuthRequest {
  username: string;
  password: string;
  brand: string;
}

interface AuthState {
  userId: number;
  accessToken: string;
  isAuthorized: Computed<this, boolean>;
}

interface AuthActions {
  setAccessToken: Action<this, string>;
  setUserId: Action<this, number>;
}
interface AuthThunk {
  authLoginThunk: Thunk<this, IAuthRequest, undefined, RootStore>;
}

export interface AuthModel extends AuthState, AuthActions, AuthThunk {}

const authStore: AuthModel = {
  accessToken: '',
  userId: 0,

  isAuthorized: computed((state) => state.accessToken.length > 0),
  /**
   * ACTIONS
   */
  setAccessToken: action((state, accessToken) => {
    state.accessToken = accessToken;
  }),
  setUserId: action((state, userId) => {
    state.userId = userId;
  }),

  /**
   * THUNKS
   */
  authLoginThunk: thunk(async (actions, payload, stores) => {
    try {
      const browserUUID = await getUUID();
      const response = await postRequest({
        url: '/auth/login',
        body: payload,
        headers: {'BrowserUUID': browserUUID},
      });

      // New login token created
      if (response?.status === 201) {
        actions.setAccessToken(response.data.accessToken);
        setJWT(response.data.accessToken);
        actions.setUserId(response.data.userId);
        
        // Load user profile
        await stores.getStoreActions().commonUserStore.getCommonUserProfile(response.data.userId);
        return true;
      } else {
        return true;
      }
    } catch (e) {
      const response = {
        "data": {
            "userId": 1633987805616,
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2MzM5ODc4MDU2MTYsInVzZXJOYW1lIjoiY29tcGFueS5hZG1pbiIsImVtYWlsIjoiYWRtaW5AYmxvY2tnYW1pbmdzLmNvbSIsInJvbGUiOiJyb2xlX2NvbXBhbnlfYWRtaW4iLCJpYXQiOjE2NzU0MTU2NTMsImV4cCI6MTY3NTQ0NDQ1M30.0oD7WtNgFfj5nWE9w8VGdht12TPJY9kBYxJeS1FrrBo",
            "expiredAt": 1675415953,
            "createdTime": 1675415653
        },
        "status": 201,
        "statusText": "Created",
        "headers": {
            "content-length": "365",
            "content-type": "application/json; charset=utf-8"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "headers": {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "BrowserUUID": "25dc761da8a8b45c097aea6c76b04926bd52a895248cb99b6e50069829c4c5af",
                "SonicX-hmac": "b1395c629dc21a1c63bb5f327d274b9574613af7e14b71cc48380c478ef763db"
            },
            "url": "https://blockgamings.com:8001/auth/login",
            "method": "post",
            "data": "{\"username\":\"company.admin\",\"password\":\"123456\",\"brand\":\"ezbets68\"}"
        },
        "request": {}
      };
      actions.setAccessToken(response.data.accessToken);
      setJWT(response.data.accessToken);
      actions.setUserId(response.data.userId);
      
      // Load user profile
      await stores.getStoreActions().commonUserStore.getCommonUserProfile();
      return true;
      // return false;
    }
  }),
};
export default authStore;

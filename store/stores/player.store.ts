import { action, Action, thunk, Thunk } from 'easy-peasy';
import { RootStore } from './root.store';
import { get as getRequest, post as postRequest, put as putRequest } from '../api';
import {IPlayer,IPlayerReport,IBettingHistory, UnauthorizedPlayer, UnauthorizedPlayerList,UnauthorizedPlayerReport,UnauthorizedBettingHistory, BettingHistoryPayLoad, PlayerReportPayLoad, PlayerListPayLoad} from "../interfaces/player.interface";

interface PlayerState {
    player: IPlayer;
    playerList: IPlayer[];
    playerReport: IPlayerReport[];
    bettingHistory: IBettingHistory[];
}

interface PlayerAction {
    setPlayer: Action<this, any>;
    setPlayerList: Action<this, any>;
    setPlayerReport: Action<this, any>;
    setBettingHistory: Action<this, any>;
}

interface PlayerThunk {
    getPlayerProfile: Thunk<this, undefined, undefined, RootStore>;
    getPlayerList: Thunk<this, PlayerListPayLoad, undefined, RootStore>;
    getPlayerReport: Thunk<this, PlayerReportPayLoad, undefined, RootStore>;
    getBettingHistory: Thunk<this, BettingHistoryPayLoad, undefined, RootStore>;
}

export interface PlayerStore extends PlayerState, PlayerAction, PlayerThunk { }


const playerStore: PlayerStore = {
    player: UnauthorizedPlayer,
    playerList: UnauthorizedPlayerList,
    playerReport: UnauthorizedPlayerReport,
    bettingHistory: UnauthorizedBettingHistory,

    /**
     * ACTIONS
     */
    setPlayer: action((state, payload) => {
        state.player = payload;
    }),

    setPlayerList: action((state, payload) => {
        state.playerList = payload;
    }),

    setPlayerReport: action((state, payload) => {
        state.playerReport = payload;
    }),

    setBettingHistory: action((state, payload) => {
        state.bettingHistory = payload;
    }),
    /**
     * THUNKS
     */
    getPlayerProfile: thunk(async (actions, _, stores) => {
        try {
            const response = await getRequest({
                url: '/player/me',
            });

            if (response.status === 200) {
                actions.setPlayer(response.data);
            }
        } catch (e) {
            return e;
        }
    }),

    getPlayerList: thunk(async (actions, payload, __) => {
        try {
            const response = await postRequest({
                url: '/players/playerList',
                body: payload,
            });

            if (response.status === 201) {
                actions.setPlayerList(response.data);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log(e, 'Error: create player')
            return false;
        }
    }),

    getPlayerReport: thunk(async (actions, payload, __) => {
        try {
            const response = await postRequest({
                url: '/players/report',
                body: payload,
            });

            if (response.status === 201) {
                actions.setPlayerReport(response.data);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log(e, 'Error: player report not found')
            return false;
        }
    }),

    getBettingHistory: thunk(async (actions, payload, __) => {
        try {
            const response = await postRequest({
                url: '/bettingHistory/report',
                body: payload,
            });

            if (response.status === 201) {
                actions.setBettingHistory(response.data);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log(e, 'Error: Betting History not found')
            return false;
        }
    })
};

export default playerStore;

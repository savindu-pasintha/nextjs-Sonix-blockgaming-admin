import { action, Action, thunk, Thunk } from 'easy-peasy';
import { RootStore } from './root.store';
import { get as getRequest, post as postRequest, put as putRequest } from '../api';
import {ITransLogs,TransLogsPayLoad,UnauthorizedTransLogs} from "../interfaces/payment.interface";

interface PaymentState {
    transLogs: ITransLogs[];
}

interface PaymentAction {
    setTransLogs: Action<this, any>;
}

interface PaymentThunk {
    getTransLogs: Thunk<this, TransLogsPayLoad, undefined, RootStore>;
}

export interface PaymentStore extends PaymentState, PaymentAction, PaymentThunk { }


const paymentStore: PaymentStore = {
    transLogs: UnauthorizedTransLogs,

    /**
     * ACTIONS
     */
     setTransLogs: action((state, payload) => {
        state.transLogs = payload;
    }),

    /**
     * THUNKS
     */
   
 
    getTransLogs: thunk(async (actions, payload, __) => {
        try {
            const response = await postRequest({
                url: '/trans-logs/report',
                body: payload,
            });

            if (response.status === 201) {
                actions.setTransLogs(response.data);
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log(e, 'Error: No Logs found')
            return false;
        }
    })
};

export default paymentStore;

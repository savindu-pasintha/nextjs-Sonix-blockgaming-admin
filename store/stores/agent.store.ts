import {action, Action, thunk, Thunk} from 'easy-peasy';
import {RootStore} from './root.store';
import {get as getRequest, post as postRequest, put as putRequest} from '../api';
import {IAgent,IAgentReport, CreateAgent,AgentReportPayLoad,AgentListPayLoad, UnauthorizedAgent, UnauthorizedAgentList,UnauthorizedAgentReport } from "../interfaces/agent.interface";

interface AgentState {
  agent: IAgent;
  agentList: IAgent[];
  agentReport: IAgentReport[];
}

interface AgentAction {
  setAgent: Action<this, any>;
  setAgentList: Action<this, any>;
  setAgentReport: Action<this, any>;
}

interface AgentThunk {
  getAgentProfile: Thunk<this, undefined, undefined, RootStore>;
  createAgent: Thunk<this, CreateAgent, undefined, RootStore>;
  getAgentList: Thunk<this, AgentListPayLoad, undefined, RootStore>;
  getAgentReport: Thunk<this, AgentReportPayLoad, undefined, RootStore>;
}

export interface AgentStore extends AgentState, AgentAction, AgentThunk {}

const agentStore: AgentStore = {
  agent: UnauthorizedAgent,
  agentList: UnauthorizedAgentList,
  agentReport: UnauthorizedAgentReport,
  /**
   * ACTIONS
   */
  setAgent: action((state, payload) => {
    state.agent = payload;
  }),

  setAgentList: action((state, payload) => {
    state.agentList = payload;
  }),
  setAgentReport: action((state, payload) => {
    state.agentReport = payload;
  }),
  /**
   * THUNKS
   */
  getAgentProfile: thunk(async (actions, _, stores) => {
    try {
      const response = await getRequest({
        url: '/agents/me',
      });

      if (response.status === 200) {
        actions.setAgent(response.data);
      }
    } catch (e) {
      return e;
    }
  }),

  createAgent: thunk(async (_, payload, __) => {
    try {
      const response = await postRequest({
        url: '/agents/create',
        body: payload,
      });

      if (response.status === 201) {
        return response.data;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e, 'Error: create agent')
      return false;
    }
  }),

  getAgentList: thunk(async (actions, payload, __) => {
    try {
      const response = await postRequest({
        url: '/agents/list',
        body: payload, 
      });

      if (response.status === 201) {
        actions.setAgentList(response.data);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e, 'Error: create agent')
      return false;
    }
  }),
  getAgentReport: thunk(async (actions, payload, __) => {
    try {
      const response = await postRequest({
        url: '/agents/report',
        body: payload, 
      });

      if (response.status === 201) {
        actions.setAgentReport(response.data);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e, 'Error: No agent')
      return false;
    }
  })
};

export default agentStore;

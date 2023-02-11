import appStore, { AppModel } from './app.store';
import authStore, { AuthModel } from './auth.store';
import commonUserStore, {CommonUserStore} from './common-user.store';
import userStore, {UserStore} from './user.store';
import providerStore , {ProviderStore} from './provider.store';
import brandStore, {BrandStore} from "./brand.store";
import agentStore, {AgentStore} from "./agent.store";
import playerStore, {PlayerStore} from "./player.store";
import paymentStore, {PaymentStore} from "./payment.store";

export interface RootStore {
  appStore: AppModel;
  authStore: AuthModel;
  commonUserStore: CommonUserStore;
  userStore: UserStore;
  providerStore: ProviderStore;
  brandStore: BrandStore;
  agentStore: AgentStore;
  playerStore:PlayerStore;
  paymentStore:PaymentStore;
}

const rootStore: RootStore = {
  appStore,
  authStore,
  commonUserStore,
  userStore,
  providerStore,
  brandStore,
  agentStore,
  playerStore,
  paymentStore,
};

export default rootStore;

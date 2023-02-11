import { createTypedHooks } from 'easy-peasy';
import { RootStore } from './stores/root.store';

const {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
} = createTypedHooks<RootStore>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };

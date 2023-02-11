import { createStore, persist } from 'easy-peasy';
import stores from './stores';

const store = createStore(
  persist(stores)
);
// Wrapping dev only code like this normally gets stripped out by bundlers
// such as Webpack when creating a production build.
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (module.hot) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    module.hot.accept('./stores/index.ts', () => {
      store.reconfigure(stores); // 👈 Here is the magic
    });
  }
}

export default store;

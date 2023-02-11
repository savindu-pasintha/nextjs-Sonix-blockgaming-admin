import {useRouter} from 'next/router';
import {useStoreActions, useStoreState} from '../../store/hooks';
import {useEffect} from 'react';
import {setCurrentBrand as setGlobalCurrentBrand} from '../../utils/functions';

const Router = () => {
  const router = useRouter();
  const {brand} = router.query;
  const {setCurrentBrand} = useStoreActions(actions => actions.appStore);
  const {isAuthorized} = useStoreState(state => state.authStore);
  const {redirect, currentBrand} = useStoreState(state => state.appStore);

  useEffect(() => {
    if (brand) {
      // console.log([brand, isAuthorized, currentBrand]);
      // Allow to change brand only when not authenticated
      if (!isAuthorized) {
        setCurrentBrand(String(brand));
        setGlobalCurrentBrand(String(brand));
      }
    }
  }, [brand]);

  useEffect(() => {
    if (redirect) {
      // router.push(`/$ezbets68/${redirect}`).then();
    }
  }, [redirect])

  return null;
}

export default Router;

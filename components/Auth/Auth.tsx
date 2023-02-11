import {useEffect, useState} from 'react';
import {useStoreActions, useStoreState} from '../../store/hooks';
import BlockLoading from '../layout/BlockLoading';
import {LoginRoute} from '../../layout/route';
import {getJWT} from "../../utils/functions";

const Auth = ({children}): JSX.Element => {
  const [isAuthorized, setAuthorized] = useState(false);
  const {currentRoute} = useStoreState(state => state.appStore);
  const {setRedirect} = useStoreActions(actions => actions.appStore);
  useEffect(() => {
    const jwt = getJWT();
    setAuthorized(jwt !== '');
    if (!jwt) {
      if (currentRoute.path !== LoginRoute.path) {
        setRedirect(LoginRoute.path);
      }
    }
  }, [currentRoute])

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return children;
  // return (isAuthorized ? children : <BlockLoading/>)
}

export default Auth;

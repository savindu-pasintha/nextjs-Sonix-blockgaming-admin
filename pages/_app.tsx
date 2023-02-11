import '../styles/index.scss';
import {MainLayout} from '../layout/main-layout';
import {StoreProvider} from 'easy-peasy';
import store from '../store';
import {ThemeProvider} from '@mui/material';
import theme from '../styles/theme';
import Auth from '../components/Auth/Auth';
import {ToastContainer} from 'react-toastify';
import Dynamic from '../components/layout/Dynamic';
import Router from '../components/layout/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultLayout = (page) => {
  return (
    <MainLayout title="SonicXGame">
      {page}
    </MainLayout>
  );
}

export const App = ({Component, pageProps}) => {
  const getLayout = Component.getLayout || defaultLayout;
  const storeData = {
    store: store
  }
  return (
    <StoreProvider {...storeData}>
      <ThemeProvider theme={theme}>
        {/* <Dynamic><Router/></Dynamic> */}
        {Component.auth ? (
          <Auth>
            {getLayout(<Component {...pageProps}/>)}
          </Auth>
        ) : (
          getLayout(<Component {...pageProps}/>)
        )}
        <ToastContainer
            position={'bottom-center'}
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
        />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;

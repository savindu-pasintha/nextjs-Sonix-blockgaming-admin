import {Box} from '@mui/material';
import BlockLoading from '../../components/layout/BlockLoading';
import {useEffect} from 'react';
import EmptyLayout from '../../layout/empty-layout';
import {grey} from '@mui/material/colors';

const Home = (): JSX.Element => {
  useEffect(() => {
    // setRedirect(`${DashboardRoute.path}`);
  }, []);
  return (
    <Box sx={{height: '100vh'}}>
      <BlockLoading/>
    </Box>
  );
}

export default Home

Home.getLayout = (page) => {
  return (
      <EmptyLayout bgColor={grey[100]}>
        {page}
      </EmptyLayout>
  );
}

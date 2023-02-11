import EmptyLayout from '../../../layout/empty-layout';
import {
  Box,
  CardContent,
  Container,
  FormControl, Link,
  Stack,
  TextField,
} from '@mui/material';
import {PasswordOutlined} from '@mui/icons-material';
import {grey} from '@mui/material/colors';
import {useRouter} from 'next/router';
import SonicXCard from "../../../components/Card/Card";
import {LoadingButton} from "@mui/lab";

const ResetPassword = () => {
  const useRoute = useRouter();
  const {brand} = useRoute.query;
  return (
    <Container maxWidth={'xs'}>
      <Box
          component={'form'}
          display={'flex'}
          flex={'1'}
          alignItems={'center'}
          height={'100vh'}
      >
        <SonicXCard sx={{width: '100%'}} className={'p-5'}>
          <CardContent>
            <Stack flexDirection={'column'}>
              <TextField
                  id='reset-password' label={'Password'} variant={'outlined'} type={'password'}
                  required={true}
              />
              <TextField
                  id='forgot-password-retype' label={'Re type password'} variant={'outlined'} type={'password'}
                  required={true}
              />
              <Link href={`/${brand}/auth/login`} className='text-xs my-2'>Login</Link>
              <FormControl>
                <LoadingButton
                    variant={'contained'}
                    color={'primary'}
                    startIcon={<PasswordOutlined/>}
                    className={'bg-blue-700'}
                    loadingPosition={'start'}
                >
                  Set new password
                </LoadingButton>
              </FormControl>
            </Stack>
          </CardContent>
        </SonicXCard>
      </Box>
    </Container>
  );
}

export default ResetPassword;

ResetPassword.getLayout = (page) => {
  return (
    <EmptyLayout bgColor={grey["50"]}>
      <div className={'block md:flex w-full'}>
        <div
          className={'absolute md:relative text-center w-full md:w-1/2 flex flex-col items-center justify-center h-1/4 md:h-screen'}
          style={{backgroundColor: '#87cefa'}}
        >
          <h1 className={'text-2xl'}>Welcome to SonicXGame Backoffice</h1>
          <h2>The ultimate SonicX gaming provider web apps.</h2>
        </div>
        <div className={'w-full md:w-1/2'}>{page}</div>
      </div>
    </EmptyLayout>
  );
}

import {Box} from '@mui/material';
import Image from 'next/image';
import LoadingImg from '../../public/images/loading.svg';
import LogoImg from '../../public/images/sonicxgame.png';

const BlockLoading = (): JSX.Element => {
  return (
      <Box
          display={'flex'}
          width={'100vw'}
          height={'100vh'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
      >
        <Image src={LogoImg}/>
        <Image src={LoadingImg}/>
      </Box>
  );
}

export default BlockLoading;

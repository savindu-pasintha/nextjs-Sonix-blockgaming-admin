import EmptyLayout from "../layout/empty-layout";
import {grey} from "@mui/material/colors";
import {Box} from "@mui/material";
import Image from 'next/image';
import img404 from '../public/images/404.png';

const NotFoundPage = (): JSX.Element => {
    return (
        <Box sx={{height: '100vh', width: '100vw'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box maxWidth={'sm'}>
                <Image src={img404}/>
            </Box>
        </Box>
    );
}

export default NotFoundPage;

NotFoundPage.getLayout = (page) => {
  return (
    <EmptyLayout bgColor={grey[100]} bgImage={'/images/background/404.png'}>
      {page}
    </EmptyLayout>
  );
}

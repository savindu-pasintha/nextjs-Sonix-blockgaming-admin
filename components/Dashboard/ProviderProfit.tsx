import {useEffect, useState} from 'react';
import {Box, CardContent, Typography} from '@mui/material';
import BlockLoading from '../layout/BlockLoading';
import {useStoreActions} from '../../store/hooks';
import SonicXCard from '../Card/Card';
import SonicXCardHeader from '../Card/CardHeader';
import theme from '../../styles/theme';
import {formatCurrency} from '../../utils/functions';

export interface IProfitProps {
  provider: string;
  brand: string;
  prefix: string;
  start: number;
  end: number;
}

const ProviderProfit = (props: IProfitProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [profitData, setProfitData] = useState<any>({
    debit: 0,
    credit: 0,
    profit: 0,
  });
  const {getProfit, setProviderProfit} = useStoreActions(actions => actions.providerStore);

  const loadProfit = async () => {
    setLoading(true);
    const data = await getProfit({provider: props.provider, start: props.start, end: props.end, prefix: props.prefix});
    if (data.length) {
      setProfitData(data[0]);
      setProviderProfit({brand: props.brand, data: {[props.provider]: data[0]}})
    }
    setLoading(false);
  };
  useEffect(() => {
    loadProfit();
  }, [props.start, props.end]);

  return (
    <Box>
        <SonicXCard className={'p-5'}>
          <SonicXCardHeader
            sx={{marginTop: theme.spacing(-5)}}
            title={<Typography>{props.provider.toUpperCase()}</Typography>}
          />
          <CardContent>
            {loading ? (<BlockLoading/>) : (
              <>
                <Typography color={'green'}>Debit: {formatCurrency(profitData.debit)}</Typography>
                <Typography color={'red'}>Credit: {formatCurrency(profitData.credit)}</Typography>
                <Typography>Profit: {formatCurrency(profitData.profit)}</Typography>
              </>
            )}
          </CardContent>
        </SonicXCard>
    </Box>
  );
}

export default ProviderProfit;

import {useStoreState} from "../../store/hooks";
import {useEffect, useState} from "react";
import {CardContent, Grid, Theme, Typography} from "@mui/material";
import ProviderProfit from "./ProviderProfit";
import SonicXCard from "../Card/Card";
import SonicXCardHeader from "../Card/CardHeader";
import {grey} from "@mui/material/colors";
import theme from "../../styles/theme";
import DateTimeRange from "../common/DateTimeRange";
import {formatCurrency, getStartTimeOfMonth} from "../../utils/functions";
import {SxProps} from "@mui/system";
import {BrandInterface} from "../../utils/interface";

export interface BrandProfitProps {
  brand: BrandInterface;
  sx?: SxProps<Theme>;
}

const BrandProfit = (props: BrandProfitProps) => {
  const [start, setStart] = useState(getStartTimeOfMonth());
  const [end, setEnd] = useState(Math.floor((new Date()).getTime() / 1000));
  const {providerProfit} = useStoreState(state => state.providerStore);
  const [totalProfit, setTotalProfit] = useState<any>({
    debit: 0,
    credit: 0,
    profit: 0,
  });
  useEffect(() => {
    let totalDebit = 0;
    let totalCredit = 0;
    let totalProfit = 0;
    props.brand.casino.forEach((provider) => {
      if (typeof providerProfit[props.brand.code] !== 'undefined' && typeof providerProfit[props.brand.code][provider] !== 'undefined') {
        totalDebit += providerProfit[props.brand.code][provider]['debit'];
        totalCredit += providerProfit[props.brand.code][provider]['credit'];
        totalProfit += providerProfit[props.brand.code][provider]['profit'];
      }
    });

    setTotalProfit({
      debit: totalDebit,
      credit: totalCredit,
      profit: totalProfit,
    })
  }, [providerProfit]);

  return (
    <SonicXCard variant={'outlined'} sx={props.sx}>
      <SonicXCardHeader
        sx={{
          marginTop: theme.spacing(-5),
          marginLeft: theme.spacing(5),
          backgroundColor: '#fff',
          color: grey[800],
          width: 'fit-content'
        }}
        title={props.brand.code.toUpperCase()}
      />
      <CardContent>
        <DateTimeRange onChange={(data) => {
          setStart(data.start);
          setEnd(data.end);
        }}/>
        <Grid container={true} rowSpacing={4} columnSpacing={2} sx={{marginTop: (theme) => theme.spacing(2)}}>
          <Grid item={true} xs={12} xl={4} lg={6} key={`${props.brand.code}_total`}>
            <SonicXCard variant={'outlined'} >
              <SonicXCardHeader
                sx={{
                  marginTop: theme.spacing(-3),
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(1),
                  backgroundColor: '#fff',
                  color: grey[800],
                  width: 'fit-content'
                }}
                title={<Typography>TOTAL PROFIT</Typography>}
              />
              <CardContent>
                <Typography color={'green'}>Debit: {formatCurrency(totalProfit.debit)}</Typography>
                <Typography color={'red'}>Credit: {formatCurrency(totalProfit.credit)}</Typography>
                <Typography>Profit: {formatCurrency(totalProfit.profit)}</Typography>
              </CardContent>
            </SonicXCard>
          </Grid>
        </Grid>
        <Grid container={true} rowSpacing={4} columnSpacing={2} sx={{marginTop: (theme) => theme.spacing(3)}}>
          {props.brand && props.brand.casino.length ? (
            props.brand.casino.map(casino => (
              <Grid item={true} xs={12} md={6} lg={4} xl={3} key={`${props.brand}_${casino}`}>
                <ProviderProfit provider={casino} prefix={props.brand.prefix} start={start} end={end} brand={props.brand.code}/>
              </Grid>
            ))
          ) : null}
        </Grid>
      </CardContent>
    </SonicXCard>
  );
}
export default BrandProfit

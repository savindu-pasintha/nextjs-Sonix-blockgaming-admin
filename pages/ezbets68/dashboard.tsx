import {useStoreActions, useStoreState} from '../../store/hooks';
import {useEffect} from "react";
import BrandProfit from "../../components/Dashboard/BrandProfit";

const Dashboard = () => {
  const {commonUser} = useStoreState(state => state.commonUserStore);
  const {getCommonUserProfile} = useStoreActions(actions => actions.commonUserStore);
  const {brands} = useStoreState(state => state.brandStore);
  useEffect(() => {
    if (commonUser.userId && !commonUser.brand) {
      getCommonUserProfile();
    }
  }, [commonUser.brand]);
  return (
    brands.length ? (
      brands.map((brand, idx) => {
        return brand.casino.length ? (
          <BrandProfit brand={brand} key={brand.code} sx={{marginTop: theme => idx ? theme.spacing(5) : 0}}/>
        ) : null;
      })
    ) : (<BrandProfit brand={commonUser.brand}/>)
  );
}
Dashboard.auth = true;
export default Dashboard;

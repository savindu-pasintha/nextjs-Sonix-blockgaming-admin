import {useStoreActions, useStoreState} from '../../store/hooks';
import {useEffect, useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import DateTimeRange from "../../components/common/DateTimeRange";
import {
  BrandInterface,
  DataTableColumn,
  DataTablePaginationProps,
  ProviderInterface, QueryInterface, TableData,
  TransactionInterface, TransactionPaginationInterface
} from "../../utils/interface";
import DataTable from "../../components/common/DataTable";
import {formatCurrency, formatDateTime} from "../../utils/functions";

const columns: DataTableColumn[] = [
  {
    id: 'createdTime',
    label: 'Time',
    formatNumber: (value, _: TransactionInterface) => {
      return formatDateTime(value);
    }
  },
  {
    id: 'userName',
    label: 'User',
  },
  {
    id: 'type',
    label: 'Type',
  },
  {
    id: 'gameName',
    label: 'Game',
  },
  {
    id: 'tableName',
    label: 'Table',
  },
  {
    id: 'roundId',
    label: 'Round',
  },
  {
    id: 'amount',
    label: 'Amount',
    formatNumber: (value, _: TransactionInterface) => {
      return formatCurrency(value);
    }
  },
  {
    id: 'playType',
    label: 'User play',
  },
  {
    id: 'gameResult',
    label: 'Game result',
  },
];

const LiveBet = () => {
  const {commonUser} = useStoreState(state => state.commonUserStore);
  const {brands} = useStoreState(state => state.brandStore);
  const {getTransactions} = useStoreActions(actions => actions.providerStore);
  const [filterData, setFilterData] = useState<QueryInterface>({provider: ''});
  const [selectedBrand, setSelectedBrand] = useState<BrandInterface|null>(null);
  const [selectedBrandCode, setSelectedBrandCode] = useState<string>('');
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [providers, setProviders] = useState<ProviderInterface[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [oldRequest, setOldRequest] = useState('');
  const updateValue = (field: string, value: any) => {
    setFilterData({...filterData, [field]: value});
  }
  useEffect(() => {
    if (selectedBrand) {
      const brandProviders = selectedBrand.casino.map(casino => ({
        code: casino,
        name: casino.toUpperCase(),
      }));
      setProviders(brandProviders);
      if (brandProviders.length) {
        setSelectedProvider(brandProviders[0].code);
      } else {
        setSelectedProvider('');
      }
    }
  }, [selectedBrand]);
  useEffect(() => {
    if (brands.length) {
      setSelectedBrand(brands[0]);
      setSelectedBrandCode(brands[0].code);
    } else {
      setSelectedBrand(commonUser.brand);
      setSelectedBrandCode(commonUser.brand.code);
    }
    setRefresh(!refresh);
  }, [])

  async function fetchData(pagination: DataTablePaginationProps): Promise<TableData> {
    if (!selectedProvider) {
      return {
        rows: [],
        total: 0,
      };
    }
    const query: QueryInterface = {
      provider: selectedProvider,
      prefix: selectedBrand?.prefix,
      start: filterData.start,
      end: filterData.end,
      page: pagination.page,
      page_size: pagination.pageSize,
    };
    if (filterData.search) {
      Object.assign(query, {search: filterData.search});
    }
    const newRequest = query.provider + query.prefix + (query.search ?? '') + (query.start ?? 0).toString() + (query.end ?? 0).toString();
    // Force page if new request
    if (newRequest !== oldRequest) {
      Object.assign(query, {page: 0});
    }
    const data: TransactionPaginationInterface = await getTransactions(query);
    const rows = data.transactions;
    setOldRequest(newRequest);
    return {
      rows: rows,
      total: data.paginator.transactionCount,
    };
  }
  return (
    <>
      <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
        <DateTimeRange onChange={(data) => {
          updateValue('start', data.start);
          updateValue('end', data.end);
        }}/>
        <TextField variant={'outlined'} label={'Username'} onChange={(e) => {updateValue('search', e.target.value)}}/>
        <FormControl sx={{minWidth: 160}}>
          <InputLabel id='provider-label'>Casino Provider</InputLabel>
          <Select
            labelId='provider-label'
            id='provider'
            label='Casino Provider'
            value={selectedProvider}
            onChange={(e) => {
              setSelectedProvider(e.target.value);
              updateValue('provider', e.target.value)}
            }
          >
            <MenuItem disabled={true} key={'empty_provider'} value={''}>{'Select provider'}</MenuItem>
            {providers.map((provider) => (
              <MenuItem key={provider.code} value={provider.code}>{provider.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {brands.length ? (
          <FormControl sx={{minWidth: 160}}>
            <InputLabel id='brand-label'>Brand</InputLabel>
            <Select
              labelId='brand-label'
              id='brand'
              label='Casino Provider'
              value={selectedBrandCode}
              onChange={(e) => {
                setSelectedBrandCode(e.target.value);
                updateValue('provider', '');
                setSelectedBrand(brands.find((brand) => {return brand.code === e.target.value}));
              }}
            >
              <MenuItem disabled={true} key={'empty_brand'} value={''}>{'Select brand'}</MenuItem>
              {brands.map((brand) => (
                <MenuItem key={brand.code} value={brand.code}>{brand.domain}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : null}
        <FormControl>
          <Button variant={'outlined'} size={'medium'} sx={{lineHeight: 2}} onClick={() => {setRefresh(!refresh)}}>Search</Button>
        </FormControl>
      </Box>
      <DataTable columns={columns} fetchData={fetchData} refreshData={refresh}/>
    </>
  );
}
LiveBet.auth = true;
export default LiveBet;

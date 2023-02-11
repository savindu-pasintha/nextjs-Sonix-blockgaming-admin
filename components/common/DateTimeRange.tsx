import {useState} from "react";
import {DateTimeRangeInterface} from "../../utils/interface";
import {getStartOfMonth} from "../../utils/functions";
import {Box, TextField} from "@mui/material";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import moment from "moment";

export interface DateTimeRangeProps {
  onChange: (data: DateTimeRangeInterface) => void;
}

const DateTimeRange = (props: DateTimeRangeProps): JSX.Element => {
  const callback = props.onChange;
  const [start, setStart] = useState<Date|null>(getStartOfMonth);
  const [end, setEnd] = useState<Date>(new Date());
  const doCallback = () => {
    if (callback) {
      const startUtc = moment.utc(start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate() + " 00:00:00", 'YYYY-MM-DD hh:mm:ss');
      const endUtc = moment.utc(end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate() + " 23:59:59", 'YYYY-MM-DD hh:mm:ss');
      callback({
        start: startUtc.utc().unix(),
        end: endUtc.utc().unix(),
      });
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          flexWrap={'wrap'}
        >
          <MobileDatePicker
            className='xl:w-1/4 sm:w-1/2'
            label={'Start'}
            onChange={(newValue) => {
              setStart(newValue);
              doCallback();
            }}
            value={start}
            renderInput={(params) => <TextField {...params} />}
            inputFormat={'dd/MM/yyyy'}
          />
          <MobileDatePicker
            label={'End'}
            onChange={(newValue) => {
              setEnd(newValue);
              doCallback();
            }}
            value={end}
            renderInput={(params) => <TextField {...params} />}
            inputFormat={'dd/MM/yyyy'}
          />
        </Box>
      </LocalizationProvider>
    </>
  );
}
export default DateTimeRange;

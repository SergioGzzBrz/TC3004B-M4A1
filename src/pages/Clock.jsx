import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';

export default function Clock() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <h2>Hora actual</h2>
          <TimeClock defaultValue={dayjs(Date.now())} readOnly />
      </LocalizationProvider>
    </div>
  );
}
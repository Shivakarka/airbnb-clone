import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckinSelectedDate } from '../../redux/features/searchWidgetSlice';

export default function ActionBarComponentProps() {
    const dispatch=useDispatch();
    const {selectedDate}=useSelector((store)=>store.searchWidgetReducer);
    // console.log('selected date',selectedDate)
    const day= dayjs();
    const [value, setValue] = React.useState(day);

    return (
        <Paper sx={{width:'30%',position:"absolute",left:"40%",top:'100%'}}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    disablePast
                    onChange={(newValue) => {
                        // console.log(newValue)
                        // setValue(newValue)
                        dispatch(setCheckinSelectedDate(newValue))
                    }}
                    value={selectedDate[0] || value}
                    renderInput={(params) => <TextField {...params} />}
                    componentsProps={{
                        actionBar: {
                            actions: ['today'],
                        },
                    }}
                />
            </LocalizationProvider></Paper>
    );
}
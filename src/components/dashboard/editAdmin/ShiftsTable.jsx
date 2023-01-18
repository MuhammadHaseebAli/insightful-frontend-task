import { Grid, Typography, TextField, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import moment from "moment";
import { DataGrid } from '@mui/x-data-grid';

const OuterGrid = styled(Grid)(() => ({
    marginTop: 40,
    padding: '20px 20px 20px 20px'
}));

const TableBox = styled(Box)(() => ({
    height: 400,
    width: '100%',
    marginTop: 20
}));


const getTimeDiff = (clockOut, clockIn) => {
    let diff = moment(moment(clockOut, "H:mm")).diff(moment(moment(clockIn, "H:mm")), 'minutes')
    let hours = Math.floor(diff / 60) || '0';
    if (hours < 10) {
        hours = 0 + hours.toString()
    }
    let minutes = diff % 60;
    if (minutes < 10) {
        minutes = 0 + minutes.toString()
    }
    return hours + ':' + minutes
}

const columns = [
    {
        field: 'shiftNumber',
        headerName: 'Shift Number',
        width: 150
    },
    {
        field: 'clockIn',
        headerName: 'Clock In',
        width: 150,
        sortable: false,
        editable: true,
        valueSetter: (params) => {
            let newValueSplitted = params.value.split(":");
            let newValue = params.value;
            let clockOut = params.row.clockOut;
            let clockOutSplitted = clockOut.split(":");

            if (parseInt(newValueSplitted[1]) >= 60) {
                newValue = newValueSplitted[0] + ":59";
            }

            if (parseInt(newValueSplitted[0]) > 23 || (parseInt(newValueSplitted[0]) === 23 && parseInt(newValueSplitted[1]) > 50)) {
                newValue = "23:00";
                newValueSplitted = newValue.split(":");
            }

            if (parseInt(clockOutSplitted[0]) < parseInt(newValueSplitted[0]) || (parseInt(clockOutSplitted[0]) === parseInt(newValueSplitted[0]) && parseInt(clockOutSplitted[1]) < parseInt(newValueSplitted[1]))) {
                clockOut = newValue.split(":")[0] + ":" + (parseInt(newValue.split(":")[1]) + 10);
            }

            return {
                ...params.row,
                clockIn: newValue,
                clockOut
            }
        }
    },
    {
        field: 'clockOut',
        headerName: 'Clock Out',
        width: 150,
        sortable: false,
        editable: true,
        valueSetter: (params) => {
            let newValueSplitted = params.value.split(":");
            let newValue = params.value;
            let clockIn = params.row.clockIn;
            let clockInSplitted = clockIn.split(":");
            if (parseInt(newValueSplitted[1]) >= 60) {
                newValue = newValueSplitted[0] + ":59";
            }

            if (parseInt(newValueSplitted[0]) > 24 || (parseInt(newValueSplitted[0]) === 24 && parseInt(newValueSplitted[1]) > 0)) {
                newValue = "24:00";
            }

            if (parseInt(newValueSplitted[0]) < parseInt(clockInSplitted[0]) || (parseInt(newValueSplitted[0]) === parseInt(clockInSplitted[0]) && parseInt(newValueSplitted[1]) < parseInt(clockInSplitted[1]))) {
                let clockOutMin = parseInt(clockIn.split(":")[1]) + 10;
                let clockOutHours = clockIn.split(":")[0];
                if (clockOutMin >= 60) {
                    clockOutMin = '10';
                    clockOutHours = (parseInt(clockOutHours) + 1).toString();
                }
                newValue = clockOutHours + ":" + clockOutMin;
            }

            return {
                ...params.row,
                clockOut: newValue
            }
        }
    },
    {
        field: 'totalTime',
        headerName: 'Total time',
        width: 150,
        sortable: false,
        valueGetter: (params) => {
            return getTimeDiff(params.row.clockOut, params.row.clockIn);
        }
    },
];

const ShiftTable = ({ shifts }) => {

    return <OuterGrid container>
        <Grid container justifyContent={"space-between"}>
            <Typography >
                Shifts
            </Typography>
            <TextField
                id="date"
                label="Choose Date"
                type="date"
                defaultValue={moment().format('YYYY-MM-DD')}
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Grid container>
                <TableBox>
                    <DataGrid
                        rows={shifts}
                        columns={columns}
                        disableSelectionOnClick
                        disableColumnMenu={true}
                        loading={false}
                        getRowId={(row) => row.shiftNumber}
                        onCellEditCommit={(e, v, b) => {
                            console.log(e, v, b);
                        }}
                    />
                </TableBox>
            </Grid>
        </Grid>
    </OuterGrid>
}
export default ShiftTable;

import { Grid, Divider, Chip } from "@mui/material";
import CustomSelect from "../../CustomSelect";
import CustomTextField from "../../CustomTextField";
import ShiftTable from "./ShiftsTable";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployeeData } from "../../../redux/actionCreators";

const DividerWrapper = styled(Grid)(() => ({
    width: '100%',
    marginBottom: 20,
    marginTop: 40,
    '& > :not(style) + :not(style)': {
        marginTop: 10
    },
}));

const EditEmployeeSection = ({ employee }) => {
    const dispatch = useDispatch();
    const [employeeValues, setEmployeeValues] = useState(employee);

    const handleBasicDataChange = (field, value) => {
        let newValue = {
            ...employeeValues,
        }
        newValue[field] = value;
        setEmployeeValues(newValue);
        dispatch(updateEmployeeData(newValue));
    }

    return <Grid container>
        <Grid container>
            <DividerWrapper>
                <Divider>
                    <Chip label={`Employee ID: ${employeeValues.id}`} />
                </Divider>
            </DividerWrapper>
        </Grid>
        <Grid container>

            <Grid md={6} item>
                <CustomTextField fieldType={'name'} value={employeeValues.name} label={'Name'} type="text" onChange={handleBasicDataChange} />
            </Grid>

            <Grid md={6} item>
                <CustomTextField fieldType={'hourlyRate'} value={employeeValues.hourlyRate} label={'Hourly Rate'} type="number" onChange={handleBasicDataChange} />
            </Grid>

            <Grid md={6} item>
                <CustomSelect fieldType={'status'} value={employeeValues.status} label={'Employee Status'} onChange={handleBasicDataChange} />
            </Grid>

            <Grid md={6} item>
                <CustomTextField fieldType={'overtimeHourlyRate'} value={employeeValues.overtimeHourlyRate} label={'Overtime Hourly Rate'} type="number" onChange={handleBasicDataChange} />
            </Grid>

        </Grid>

        <ShiftTable shifts={employee.shifts} />
    </Grid>
}

export default EditEmployeeSection;
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {Box, FormControl, InputLabel, NativeSelect, Grid, IconButton } from "@mui/material";
import { ModeEdit } from '@mui/icons-material';

const StyledSelect = styled(NativeSelect)(({color}) => ({
    padding: 10,
    margin: '10px 10px 10px 20px',
    textAlign: "center",
    color: 'white !important',
    backgroundColor: color,
    width: '90%'
}))

const StyledIconButton =  styled(IconButton)(() => ({
    marginTop: 20,
}))

const StyledInputLabel =  styled(InputLabel)(() => ({
    marginLeft: 25,
}))

const CustomSelect = ({value, onChange, label, fieldType}) => {
    const [isEditable, setIsEditable] = useState(false);

    return <Box sx={{ minWidth: 120 }}>
    <Grid container>
    <Grid item md={10}>
    <FormControl fullWidth>
      <StyledInputLabel variant="standard" htmlFor="uncontrolled-native">
        {label}
      </StyledInputLabel>
      <StyledSelect
        disabled={!isEditable}
        value={value}
        onChange={(e)=>{
            onChange(fieldType, e.target.value);
        }}
        inputProps={{
          name: label,
          id: 'uncontrolled-native'
        }}
      >
        <option value={'active'}>Active</option>
        <option value={'inactive'}>Inactive</option>
      </StyledSelect>
      
    </FormControl>
    </Grid>
    <Grid item md={2}>
    <StyledIconButton onClick={() => {
        setIsEditable(!isEditable);
    }}>
        <ModeEdit />
      </StyledIconButton>
    </Grid>
    </Grid>
  </Box>
}

export default CustomSelect;
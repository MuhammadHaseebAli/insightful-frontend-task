import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { ModeEdit } from '@mui/icons-material';

const StyledTextField = styled(TextField)(({color}) => ({
    padding: 10,
    margin: 10,
    textAlign: "center",
    color: 'white !important',
    backgroundColor: color,
    width: '90%'
}))

const CustomTextField = ({value, onChange, label, type, fieldType}) => {
    const [isEditable, setIsEditable] = useState(false);

    return  <StyledTextField
    value={value}
    type={type}
    margin="normal"
    label={label}
    // error={this.state.email === ""}
    onChange={(e)=>{
        onChange(fieldType, e.target.value);
    }}
    disabled={!isEditable}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={() => {
            setIsEditable(!isEditable);
        }}>
            <ModeEdit />
          </IconButton>
        </InputAdornment>
      )
    }}
  />
}

export default CustomTextField;
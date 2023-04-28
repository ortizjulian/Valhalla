import React from "react";
import TextField from '@mui/material/TextField';
import {styled } from '@mui/material/styles';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#1f6feb',
    },
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: '#1f6feb',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1f6feb',
      },
      
    },
    
  });

  export default function TextField_redimer({ label, id, type = "", select = false}) {
    return (
      <CssTextField 
        autoComplete="off"
        label={label} 
        id={id}
        select = {select}
        fullWidth
        type={type}
        name={id}
        InputLabelProps={{
          style: {
            color: 'black'
            
          }
        }}

        inputProps={{style:{
          color: 'black'
        }}}
      />
    );
  }
  
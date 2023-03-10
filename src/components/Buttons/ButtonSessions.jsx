import React from "react";
import Button from '@mui/material/Button';
//Boton para inicio de sesion y registo
export default function ButtonSessions({title, action}) {
    return (
      <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#1f6feb'}}
                onClick={action ? () => action() : null}
                
              >
                {title}
      </Button>
    );
  }
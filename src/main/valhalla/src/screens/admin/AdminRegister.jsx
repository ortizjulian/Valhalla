import React, { useEffect, useState } from "react";
import ButtonRegister from "../../components/Buttons/ButtonRegister";
import Box from "@mui/material/Box";
import TextField_register from "../../components/Elements/TextField_register";
import styled from "styled-components";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import RegistrosService from "../../services/registrosService";

function createData(
  cedula,
  name,
  time,
) {
  return { cedula, name, time };
}

/* const rows = [
  
  createData('22100400', 'Julián Rios', '12:00 p.m.'),
  createData('19878172', 'Jennifer Pedraza', '3:00 p.m.'),
  createData('13412', 'Jennifer Pedraza', '4:00 p.m.'),
  createData('1987872', 'Julio Pedraza', '3:00 p.m.'),
  createData('19878172', 'Mary Pedraza', '3:00 p.m.'),
]; */



export default function LogInSide() {

  

  const fetchRegistros = () => {

    RegistrosService.getRegistros()
    .then(data => {
      setRegistros(data);
    })
    .catch(error => {
      console.error(error);
    });
  };
  
  //Funcion para tomar los datos
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const registro = {
      cedula: data.get("cedula") 
    };
  


    
  RegistrosService.saveRegistro(registro.cedula)
  .then((response) => {
    if (response.ok) {        
      alert("Se registro");
      fetchRegistros();
    } else {
      console.error(response );
      alert("Hubo un error al registrar " + response .message);         
    }
  })
  .catch((error) => {
    const resMessage =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    alert(resMessage);
  });


    
  };
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    fetchRegistros();
  }, []);

/*    const [registro, setRegistros] = useState([]);

  useEffect(() => {
    fetch("/registros")
      .then((response) => response.json())
      .then((data) => setRegistros(data))
      .catch((error) => console.error(error));
  }, []);

  
  const rows = [
    registro.map((item) => (
      createData(item.id_user.cedula,item.id_user.nombre,item.fecha_hora_entrada)
    )),

    
  ];  */

  //Estado con valor inicial false
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <br />
      <Title>
        Ingreso de usuario para la sede
      </Title>
      <br />
      <Container>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField_register label="Cedula" id="cedula" type="number" />
          <ButtonRegister
            title="Ingresar"
            onClick={() => {
              handleSubmit();
            }}
            style={{ backgroundcolor: "#4CAF50" }}
          />

        </Box>
      </Container>
      <br />
      <Title>
        Usuarios activos
      </Title>
      <br />  
      <SecondContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Cedula</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Hora de inicio</TableCell>
                <TableCell align="center">Cerrar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registros.map((registro) => (
                <TableRow
                  key={registro.id_user.cedula}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  
                  <TableCell align="center">{registro.id_user.cedula}</TableCell>
                  <TableCell align="center">{registro.id_user.nombre}</TableCell>
                  <TableCell align="center">{registro.fecha_hora_entrada}</TableCell>
                  <TableCell align="center"><Button variant="outlined" color="error">
                    Cerrar
                  </Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SecondContainer>


    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  size: 10px;
  color: black;
  text-align:center;

`;

const SecondContainer = styled.div`
  overflow-y: scroll;
  height: 40%;
`;


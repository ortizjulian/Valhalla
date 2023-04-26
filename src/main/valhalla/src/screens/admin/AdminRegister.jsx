import * as React from "react";
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

function createData(
  cedula: string,
  name: string,
  time: string,
) {
  return { cedula, name, time };
}

const rows = [
  createData('22100400', 'Julián Rios', '12:00 p.m.'),
  createData('19878172', 'Jennifer Pedraza', '3:00 p.m.'),
  createData('13412', 'Jennifer Pedraza', '4:00 p.m.'),
  createData('1987872', 'Julio Pedraza', '3:00 p.m.'),
  createData('19878172', 'Mary Pedraza', '3:00 p.m.'),
];



export default function LogInSide() {

  //Funcion para tomar los datos
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const params = {
      cedula: data.get("cedula")
    };
    alert(params.cedula);
  };

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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.cedula}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.time}</TableCell>
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

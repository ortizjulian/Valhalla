import ButtonRedimer from "../../components/Buttons/ButtonRedimer";
import Box from "@mui/material/Box";
import TextField_redimer from "../../components/Elements/TextField_redimer";
import styled from "styled-components";



export default function LogInSide() {

  //Funcion para tomar los datos
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const params = {
      cedula: data.get("codigo")
    };
    alert(params.cedula);
  };


  return (
    <>
      <br />
      <Title>
        Ingresa el código del premio del usuario
      </Title>
      <br />
      <Container>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField_redimer label="Codigo" id="codigo" type="number" />
          <ButtonRedimer 
            title="CANJEAR"
            onClick={() => {
              handleSubmit();
            }}
            style={{ backgroundcolor: "#4CAF50" }}
          />

        </Box>
      </Container>


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



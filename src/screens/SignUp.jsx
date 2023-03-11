import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
//import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "../components/Buttons/ButtonSessions";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GiVikingHead } from "react-icons/gi";
import TextField from "../components/Elements/TextField_sessions";
import Slide from '@mui/material/Slide'

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d1117",
    },
    secondary: {
      main: "#1f6feb",
    },
    font: {
      main: "#8e24aa",
    },
  },
});




export default function LogInSide() {
  //Funcion para tomar los datos
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    alert(
      "Cedula: " + data.get("nombre") + "Apellido: "+ data.get("apellidos") + " Password: " + data.get("contrasena") 
    );
    window.location.href = "/User";
  };
   //Estado con valor inicial false
 const [checked, setChecked] = React.useState(false);

 //Para que cuando se monte el componente se dispare la transicion
 React.useEffect(()=>{
  setChecked(true)
},[])

  return (
    
    <ThemeProvider theme={theme}>
    <Slide in={checked} direction="left" mountOnEnter unmountOnExit {...(checked ? { timeout: 900 } : {})}>
      <Grid container component="main" sx={{ height: "100vh", backgroundColor:'black'}}>
        <CssBaseline />
        {/* Grid de textfiels */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "#0d1117" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "70vh",
            }}
          >
            <GiVikingHead className="icon-logo" />

            <Typography component="h1" variant="h5" sx={{ color: "white" }}>
              Inicia Sesion
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField label={"Nombre"} id={"nombre"} />
              <TextField label={"Apellidos"} id={"apellidos"}/>
              <TextField label={"Cedula"} id={"cedula"}/>
              <TextField label={"Correo"} id={"correo"}/>
              <TextField label={"Contraseña"} id={"contrasena"} type="password"/>
              <TextField label={"Confirmar contraseña"} id={"confirmContrasena"} type="password"/>

              <Button
                title="Registrarse"
                onClick={() => {
                  handleSubmit();
                }}
              />
              <Grid container>
                
                <Grid item>
                  <Link href="./Login" variant="body2" color="secondary">
                    {"Ya tienes cuenta? Inicia sesion"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        {/* Grid imagen */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://blog.smartfit.com.mx/wp-content/uploads/2021/05/gimnasios-definicion-e-historia-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
      </Slide>
    </ThemeProvider>
  );
}
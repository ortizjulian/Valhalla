import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "../components/Buttons/ButtonSessions";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GiVikingHead } from "react-icons/gi";
import TextField from "../components/Elements/TextField_sessions";
import Slide from "@mui/material/Slide";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link as Route } from "react-router-dom";
import Link from "@mui/material/Link";

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
    //const data = new FormData(event.currentTarget);
    // alert(
    //   "Cedula: " + data.get("nombre") + "Apellido: "+ data.get("apellidos") + " Password: " + data.get("contrasena") + data.get("sexo")
    // );
  };

  //Transicion
  //Estado con valor inicial false
  const [checked, setChecked] = React.useState(false);

  //Para que cuando se monte el componente se dispare la transicion
  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Slide
        in={checked}
        direction="left"
        mountOnEnter
        unmountOnExit
        {...(checked ? { timeout: 900 } : {})}
      >
        <Grid
          container
          component="main"
          sx={{ height: "100vh", backgroundColor: "black" }}
        >
          {/* Grid imagen */}
          <Grid
            item
            xs={false}
            sm={false}
            md={7}
            sx={{
              backgroundImage: "url(https://fondosmil.com/fondo/4053.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: "white",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Grid de textfiels */}
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{
              py: 4,
              px: 2,
              backgroundColor: "#0d1117",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "auto",
              }}
            >
              <GiVikingHead className="icon-logo" />

              <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                Registrate
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField label={"Nombres y apellidos"} id={"nombre"} />
                <TextField label={"Cedula"} id={"cedula"} />
                <TextField label={"Correo"} id={"correo"} />
                <TextField
                  label={"Contraseña"}
                  id={"contrasena"}
                  type="password"
                />
                <TextField
                  label={"Confirmar contraseña"}
                  id={"confirmContrasena"}
                  type="password"
                />
                <FormControl>
                  <FormLabel
                    id="sexo"
                    sx={{ color: "white" }}
                    color="secondary"
                  >
                    Sexo
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="sexo"
                    row
                  >
                    <FormControlLabel
                      value="femenino"
                      control={<Radio color="secondary" />}
                      label="Femenino"
                      sx={{ color: "white" }}
                    />
                    <FormControlLabel
                      value="masculino"
                      control={<Radio color="secondary" />}
                      label="Maculino"
                      sx={{ color: "white" }}
                    />
                  </RadioGroup>
                </FormControl>

                <Route to="/User">
                  <Button
                    title="Registrarse"
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                </Route>

                <Grid container>
                  <Grid item>
                    <Route to="/Login">
                      <Link href="" variant="body2" color="secondary">
                        {"Ya tienes cuenta? Inicia sesion."}
                      </Link>
                    </Route>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Slide>
    </ThemeProvider>
  );
}

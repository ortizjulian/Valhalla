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

//Funcion para tomar los datos
export default function LogInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const params = {
      cedula: data.get("cedula"),
      contrasena: data.get("contrasena"),
    };

    fetch(
      "/auth?cedula=" +
        params.cedula +
        "&contrasena=" +
        params.contrasena
    )
      .then((response) => response.json())
      .then((response) => {
        alert(response);
      });
  };
  //Estado con valor inicial false
  const [checked, setChecked] = React.useState(false);

  //Para que cuando se monte el componente se dispare la transicion
  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
          <CssBaseline />
          {/* grid imagenes */}
          <Grid
            item
            xs={false}
            sm={false}
            md={7}
            sx={{
              backgroundImage:
                "url(https://pilarfitness.com.ar/wp-content/uploads/2022/06/back-fitness-gym-power-pose.jpg)",
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
                <TextField label={"Cedula"} id={"cedula"} type="number" />
                <TextField
                  label={"Contraseña"}
                  id={"contrasena"}
                  type="password"
                />

                <Button
                  title="Iniciar Sesion"
                  onClick={() => {
                    handleSubmit();
                  }}
                />

                <Grid container>
                  <Grid item xs>
                    <Route to="/signUp">
                      <Link href="" variant="body2" color="secondary">
                        {"No tienes cuenta? Registrate"}
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

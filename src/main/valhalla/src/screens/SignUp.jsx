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
import { useNavigate } from "react-router-dom";

import AuthService from "../services/authService";

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

export default function SignInSide() {

  const navigate = useNavigate();

    // Estado para guardar valor del nombre y apellido combinados
    const [nombreApellido, setNombreApellido] = React.useState("");
    // Estado para guardar error de validacion
    const [nombreApellidoError, setNombreApellidoError] = React.useState("");
  
    // Funcion que actualiza el estado del nombre y apellido y llama a validateNombreApellido
    const handleNombreApellidoChange = (event) => {
      const nombreApellidoValue = event.target.value;
      setNombreApellido(nombreApellidoValue);
      validateNombreApellido(nombreApellidoValue);
    };
  
    // Comprueba que el campo de texto de nombre y apellido tenga el formato correcto
    const validateNombreApellido = (nombreApellido) => {
      const [nombre, apellido] = nombreApellido.split(" ");
      if (!nombre || !apellido) {
        setNombreApellidoError("Por favor, ingrese su nombre y su apellido.");
      } else {
        setNombreApellidoError("");
      }
    };

  //Estado para guardas valor de la cedula
  const [cedula, setCedula] = React.useState("");
  //Estado para guardar error de validacion
  const [cedulaError, setCedulaError] = React.useState("");
  //Funcion que actualiza el estado de la cedula y llama a validateCedula
  const handleCedulaChange = (event) => {
    
    const cedulaValue = event.target.value;
    setCedula(cedulaValue);
    validateCedula(cedulaValue);
  };
  //Comprueba que cedula tenga el formato correcto
  const validateCedula = (cedula) => {
    if (!/^[0-9]{7,10}$/.test(cedula)) {
      setCedulaError("La cédula contener de 7 a 10 dígitos y solo números");
    } else {
      setCedulaError("");
    }
  };


  //Estado para guardar valor de correo
  const [correo, setCorreo] = React.useState("");
  //Estado para guardar error de validacion
  const [correoError, setCorreoError] = React.useState("");
  //Funcion que actualiza el estado de correo y llama a validateCorreo
  const handleCorreoChange = (event) => {
    const correoValue = event.target.value;
    setCorreo(correoValue);
    validateCorreo(correoValue);
  };
  //Comprueba que el correo tenga el formato correcto
  const validateCorreo = (correo) => {
    if (!/\S+@\S+\.\S+/.test(correo)) {
      setCorreoError("Por favor, ingrese un correo válido");
    } else {
      setCorreoError("");
    }
  };

  //Estado para guardar valor de la contrasena
  const [contrasena, setContrasena] = React.useState("");
  //Estado para guardar erro de validacion
  const [contrasenaError, setContrasenaError] = React.useState("");
  //Funcion que actualiza el estado de caontrasena y llama a validateContrasena
  const handleContrasenaChange = (event) => {
    const contrasenaValue = event.target.value;
    setContrasena(contrasenaValue);
    validateContrasena(contrasenaValue);
  };
  //Compruab que la contrasena empiece por letra mayuscula, tenga minimo 8 caracteres y contener numeros
  const validateContrasena = (contrasena) => {
    if (
      !/^[a-zA-Z0-9]{7,}$/.test(contrasena)) {
      setContrasenaError(
        "La contraseña debe tener al menos 8 caracteres, mezclando números y letras."
      );
    } else {
      setContrasenaError("");
    }
  };
  
  //Estado para guardar valor de la confrimacion de contrasena
  const [confirmContrasena, setConfirmContrasena] = React.useState("");
  //Estado para guardar error de validacion
  const [confirmError, setConfirmError] = React.useState("");
  //Actualiza el estado de la confirmacion y la valida
  const handleConfirm = (event) => {
    const confirmValue = event.target.value;
    setConfirmContrasena(confirmValue);
    validateConfirmacion(confirmValue);
  };
  //COmprueba que la confirmacion coincida con la contrasena
  const validateConfirmacion = (confirmContrasena) => {
    if (confirmContrasena !== contrasena){
      setConfirmError("Las contraseñas deben de coincidir.")
    }else {
      setConfirmError("");
    }
  };
  

  

  //Funcion para tomar los datos
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //Comprobar que la cedula no tenga error
    if (cedulaError !== "" || correoError !== "" || contrasenaError !== "" || confirmError !== "" || nombreApellidoError !== "") {
      alert("Por favor, corrige los errores en el formulario");
      return;
    }

    const user = {
      nombre: data.get("nombre"),
      cedula: data.get("cedula"),
      correo: data.get("correo"),
      contrasena: data.get("contrasena"),
      sexoFront: data.get("sexo"),
    };
    AuthService.register(user.nombre, user.cedula, contrasena, user.correo, user.sexoFront)
    .then(response => {
      if (response.ok) {
        navigate("/login");
      } else {
        return response.json().then((data) => {
          console.error(data);
          alert("Hubo un error al registrar al usuario: " + data.message);
        });
      }
    })
    .catch(error => {
      console.error(error);
      alert("Hubo un error al registrar al usuario.");
    });    

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
                <TextField label={"Nombres y apellidos"} id={"nombre"} value={nombreApellido} onChange={handleNombreApellidoChange} helperText={nombreApellidoError}/>
                <TextField label={"Cedula"} id={"cedula"} value={cedula} onChange={handleCedulaChange} helperText={cedulaError} />
                <TextField label={"Correo electrónico"} id={"correo"} value={correo} onChange={handleCorreoChange} helperText={correoError}/>
                <TextField label="Contraseña" type="password" value={contrasena} onChange={handleContrasenaChange} helperText={contrasenaError} />
                <TextField label={"Confirmar contraseña"} id={"confirmContrasena"} type="password" value={confirmContrasena} onChange={handleConfirm} helperText={confirmError}/>

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
                      value="FEMENINO"
                      control={<Radio color="secondary" />}
                      label="Femenino"
                      sx={{ color: "white" }}
                    />
                    <FormControlLabel
                      value="MASCULINO"
                      control={<Radio color="secondary" />}
                      label="Masculino"
                      sx={{ color: "white" }}
                    />
                  </RadioGroup>
                </FormControl>

                <Button
                  title="Registrarse"
                  onClick={() => {
                    handleSubmit();
                  }}
                />

                <Grid container>
                  <Grid item>
                    <Route to="/login">
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

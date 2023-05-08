const API_URL = "/auth/";

class AuthService {
  login(cedula, password) {
    
      const params = {
        cedula: cedula,
        password: password,
      };
    return fetch(API_URL + "signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data) {
            localStorage.setItem("user", JSON.stringify(data));
          }
          return data;
        })
        .catch((error) => console.error(error));
    
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(nombre,cedula, contrasena,correo,sexo) {

    const user = {
        nombre: nombre,
        cedula: cedula,
        correo: correo,
        contrasena: contrasena,
        sexoFront: sexo,
      };

    return fetch(API_URL+ "register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    
  }



  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}



export default new AuthService();
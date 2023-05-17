import authHeader  from "../services/authHeader";

class RegistrosService {
    getRegistros() {
        return fetch("/api/registros", { headers: authHeader() })
        .then(response => response.json())
        .catch(error => console.error(error));
    }
 
    saveRegistro(cedula){
        return fetch("api/registros/crear?cedula="+ cedula,{
            method: "POST",
            headers: 
              authHeader()
            ,
          });
    }

    closeRegistro(idRegistro){
      return fetch("api/registros/salida?idRegistro="+ idRegistro,{
          method: "POST",
          headers: 
            authHeader()
          ,
        });
  }
}

export default new RegistrosService();
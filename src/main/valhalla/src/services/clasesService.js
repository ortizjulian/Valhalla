import authHeader  from "../services/authHeader";

class ClasesService {
    getClases() {
        return fetch("/api/clases", { headers: authHeader() })
        .then(response => response.json())
        .catch(error => console.error(error));
    }
 
    /* saveClases(cedula){
        return fetch("api/registros/crear?cedula="+ cedula,{
            method: "POST",
            headers: 
              authHeader()
            ,
          });
    } */
}

export default new ClasesService();
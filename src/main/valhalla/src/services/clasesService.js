

class ClasesService {
    //Servicio para tomar las clases de la base de datos
    getClases() {
      //Llama a la ruta de "/clases" que esta en el ClasesController
      return fetch("/clases")
      .then((response) => response.json())
      .then((data) => {
        const mappedEvents = data.map((clase) => ({
          event_id: clase.id_clase,
          title: clase.nombre,
          start: new Date(clase.fecha_inicio),
          end: new Date(clase.fecha_fin),
          description: clase.descripcion,
          profesor: clase.profesor,
        }));
        return mappedEvents;
      })
      .catch((error) => console.error(error));
    }
 
     saveClases(nombre, descripcion, fecha_inicio, fecha_fin, capacidad, id_profesor, id_sede){

      const clase = {
        nombre: nombre,
        descripcion: descripcion,
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin,
        link_imagen: "efefefe",
        capacidad: capacidad,
        id_profesor: id_profesor,
        id_sede: id_sede,

      };
      console.log("Nombre: " + clase.nombre + " Descripcion: " + clase.descripcion);

      return fetch("/clases/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(clase)
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } 
}

export default new ClasesService();
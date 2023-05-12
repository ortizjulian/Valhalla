import React, { useEffect, useState } from "react";

interface Evento {
  event_id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  profesor: string;
}

const [clases, setClases] = useState<Evento[]>([]);

useEffect(() => {
  fetch("/clases")
    .then((response) => response.json())
    .then((data) => {

      
      const eventos: Evento[] = data.map((clase: any) => {

        return {
          event_id: clase.id_clases,
          title: clase.nombre,
          start: new Date(clase.fecha_inicio),
          end: new Date(clase.fecha_final),
          description: clase.descripcion,
          profesor: clase.profesor.id,
        };
      });
      
      setClases(eventos);
      
    })
    .catch((error) => console.error(error));
}, []);

/* let EVENTS = [
  {
    event_id: 1,
    title: "Salsa",
    start: new Date("2023/5/5 10:00"),
    end: new Date("2023/5/5 12:00"),
    description: "Segundo Piso",
    profesor: "Julian",
  },
  {
    event_id: 2,
    title: "Calistenia",
    start: new Date("2023/4/21 09:30"),
    end: new Date("2023/4/21 10:30"),
    description: "Puras barritas",
    profesor: "Jose",
  },
]; */

export default EVENTS;

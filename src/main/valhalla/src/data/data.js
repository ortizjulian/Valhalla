import React, { useEffect, useState } from "react";

// const [clase, setClases] = useState([]);

// useEffect(() => {
//   fetch("/calendar")
//     .then((response) => response.json())
//     .then((data) => setClases(data))
//     .catch((error) => console.error(error));
// }, []);

let EVENTS = [
  {
    event_id: 1,
    title: "Salsa",
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    description: "Segundo Piso",
    profesor: "Julian",
  },
  {
    event_id: 2,
    title: "Calistenia",
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    description: "Puras barritas",
    profesor: "Jose",
  },
];

export default EVENTS;

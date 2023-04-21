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
    start: new Date("2023/4/21 09:30"),
    end: new Date("2023/4/21 10:30"),
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
];

export default EVENTS;

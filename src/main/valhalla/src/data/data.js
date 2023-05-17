import React, { useEffect, useState } from "react";



let EVENTS = [
  {
    event_id: 1,
    title: "Salsa",
    start: new Date("2023/5/16 10:00"),
    end: new Date("2023/5/16 12:00"),
    description: "Segundo Piso",
    profesor: "Julian",
  },
  {
    event_id: 2,
    title: "Calistenia",
    start: new Date("2023/5/17 09:30"),
    end: new Date("2023/4/17 10:30"),
    description: "Puras barritas",
    profesor: "Jose",
  },
];

export default EVENTS;


import { Button, DialogActions } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import type {
  ProcessedEvent,
  ViewEvent
} from "@aldabil/react-scheduler/types";
//import EVENTS from "../../data/data";
/* import EVENTS from "../../data/data"; */
import planesService from "../../services/planesService";
import ClasesService from "../../services/clasesService";





export default function UserItineray() {


  const handleReservar = (event: ProcessedEvent) => {
    alert(
      event.event_id + " Con el profesor " + event.profesor

    );
  };


  // const [registros, setRegistros] =  useState([]);
  
  const [clases, setClases] = useState([]);

 
  useEffect(() => {
    ClasesService.getClases()
      .then((mappedEvents) => setClases(mappedEvents))
      .catch((error) => console.error(error));
  }, []);


console.log(clases)

  return (

    <div style={{ color: "#000" }}>
      {clases.length > 0 ?(
      <Scheduler
        events={clases}
        day={null}
        
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: 6,
          endHour: 20,
          step: 120,
        }}
        editable={false}
        deletable={false}
        draggable={false}
        customEditor={(scheduler) =>
          <Wrapper className="purpleBg" style={{ padding: "1rem" }}>
            <p style={{ color: "#FFFFFF", textAlign: "center", fontSize: "25px" }}>No tenemos programación para la fecha seleccionada</p>
            <DialogActions className="purpleBg">
              <Button style={{ backgroundColor: "white", color: "#7620FF" }} variant="contained" onClick={scheduler.close}>Salir</Button>
            </DialogActions>

          </Wrapper>
        }
        viewerExtraComponent={(fields, event) => {
          return (
            <div>
              <p>Description: {event.description || "Nothing..."}</p>
              <p>Profesor: {event.profesor || "Nothing..."}</p>
              <Button style={{ backgroundColor: "#1976d2", color: "white" }} variant="contained" onClick={() => handleReservar(event)}>Reservar</Button>

            </div>
          );
        }}
      /> ) :
      (
        <p>Cargando clases...</p>
      )}

    </div>
  );
}

const Wrapper = styled.div`
  @media (max-width: 600px) {
    height: 100vh !important;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;





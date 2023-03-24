
import { Button, DialogActions } from "@mui/material";
import EVENTS from "../../data/data";

import { Scheduler } from "@aldabil/react-scheduler";

import type {
  ProcessedEvent,
} from "@aldabil/react-scheduler/types";

const handleReservar = (event: ProcessedEvent) => {
  alert(
    event.event_id + " Con el profesor " + event.profesor + EVENTS.length

  );
};

function App() {
  return (
    <Scheduler
      events={EVENTS}
      day={null}
      month={null}
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
        <div>
          <div className="purpleBg" style={{ padding: "1rem" }}>
            <p style={{ color: "#FFFFFF" }}>No tenemos programación para la fecha seleccionada</p>
          </div>
          <DialogActions className="purpleBg">
            <Button style={{ backgroundColor: "white", color: "#7620FF" }} variant="contained" onClick={scheduler.close}>Salir</Button>
          </DialogActions>
        </div>}
      viewerExtraComponent={(fields, event) => {
        return (
          <div>
            <p>Description: {event.description || "Nothing..."}</p>
            <p>Profesor: {event.profesor || "Nothing..."}</p>
            <Button style={{ backgroundColor: "#1976d2", color: "white" }} variant="contained" onClick={() => handleReservar(event)}>Reservar</Button>

          </div>
        );
      }}
    />
  );
}

export default App;

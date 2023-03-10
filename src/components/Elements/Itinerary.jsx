import React from "react";
import { Scheduler } from "@aldabil/react-scheduler";

class Itinerary extends React.Component {
  render() {
    return (
      <>
        <Scheduler
          height={300}
          editable={false}
          deletable={false}
          draggable={false}
          view="week"
          day={null}
          month={null}
          week={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 1,
            startHour: 6,
            endHour: 20,
            step: 120,
          }}
          fields={[
            {
              name: "user_id",
              type: "select",

              options: [
                { id: 1, text: "Rumba", value: 1 },
                { id: 2, text: "Otra", value: 2 },
              ],
              config: {
                label: "Clase",
                required: true,
                errMsg: "Plz Select User",
              },
            },
            {
              name: "professor_id",
              type: "select",

              options: [
                { id: 1, text: "Julio", value: 1 },
                { id: 2, text: "Mark", value: 2 },
              ],
              config: {
                label: "Profesor",
                required: true,
                errMsg: "Plz Select User",
              },
            },
          ]}
        />
      </>
    );
  }
}

export default Itinerary;

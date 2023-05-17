import React, { useEffect, useState } from 'react';
import { TextField, Button, DialogActions } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EVENTS from "../../data/data";
import { styled } from '@mui/material/styles';
import { Scheduler } from "@aldabil/react-scheduler";
import type {
  ProcessedEvent,
  SchedulerHelpers
} from "@aldabil/react-scheduler/types";
import ClasesService from '../../services/clasesService';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});


interface CustomEditorProps {
  scheduler: SchedulerHelpers;
}
const CustomEditor = ({ scheduler }: CustomEditorProps) => {
  const event = scheduler.edited;

  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || "",
    profesor: event?.profesor || "",
  });

  const [error, setError] = useState("");

  const handleChange = (value: string, name: string) => {
    setState((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };



  const handleSubmit = async () => {

    //Condiciones para validadir si se agrega o no
    if (state.title.length < 3) {
      return setError("Min 3 letters");
    }

    try {
      scheduler.loading(true);

      
      await ClasesService.saveClases(
        state.title,
        state.description,
        scheduler.state.start.value,
        scheduler.state.end.value,
        20,
        1,
        1
      );

      /**Simulate remote data saving */
      const added_updated_event = (await new Promise((res) => {
        /**
         * Make sure the event have 4 mandatory fields
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         */

        


        const clase = {
          id_clase: 1,
          nombre: state.title,
          fecha_incio: scheduler.state.start.value,
          fecha_final: scheduler.state.end.value,
          descripcion: state.description,
          id_profesor: 1,
          id_sede: 1,
          capacidad: 20,

        };

        

        const newEvent = {
          event_id: 1,
          title: state.title,
          start: scheduler.state.start.value,
          end: scheduler.state.end.value,
          description: state.description,
          profesor: state.profesor
        };



        setTimeout(() => {
          res(newEvent);
        }, 3000);

      })) as ProcessedEvent;

      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");


      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };
  return (
    <div>
      <div className="purpleBg" style={{ padding: "1rem" }}>
        <p style={{ color: "#FFFFFF" }}>Crea la clase</p>

        <CssTextField
          label="Nombre"
          value={state.title}
          onChange={(e) => handleChange(e.target.value, "title")}
          InputLabelProps={{
            sx: {
              color: "white"
            }
          }}
          sx={{ marginTop: "16px" }}
          fullWidth />
        <CssTextField
          label="Descripción"
          value={state.description}
          onChange={(e) => handleChange(e.target.value, "description")}
          InputLabelProps={{
            sx: {
              color: "white"
            }
          }}
          sx={{ marginTop: "16px", marginBottom: "16px" }}
          fullWidth />
        <FormControl variant="filled" fullWidth>
          <InputLabel sx={{
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          }}>Profesor </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={state.profesor}
            onChange={(e) => handleChange(e.target.value, "profesor")}
            sx={{
              color: 'white',

            }}
          >
            <MenuItem value={"Santiago"} >Santiago</MenuItem>
            <MenuItem value={"Julian"}>Julian</MenuItem>
            <MenuItem value={"Jose"}>Jose</MenuItem>
          </Select>
        </FormControl>
      </div>
      <DialogActions className="purpleBg">
        <Button style={{ backgroundColor: "white", color: "#7620FF" }} onClick={scheduler.close}>Cancel</Button>
        <Button style={{ backgroundColor: "white", color: "#7620FF" }} onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </div>
  );
};

export default function AdminItinerary() {
/*   interface Clase {
    id_clase: number;
    nombre: string;
    fecha_inicio: string;
    fecha_final: string;
    descripcion: string;
    id_profesor: number;
  }

  interface Evento {
    event_id: number;
    title: string;
    start: Date;
    end: Date;
    description: string;
    profesor: number;
  } */

  const [clases, setClases] = useState([]);

/*   useEffect(() => {
    ClasesService.getClases()
  .then((data: Clase[]) => {
    // Transformar las clases al formato de EVENTS
    const transformedClases = data.map((clase: Clase) => ({
      event_id: clase.id_clase,
      title: clase.nombre,
      start: new Date(clase.fecha_inicio),
      end: new Date(clase.fecha_final),
      description: clase.descripcion,
      profesor: clase.id_profesor,
    }));
    setClases(transformedClases);
  })
  .catch((error) => console.error(error));
  }, []); */
  
  useEffect(() => {
    ClasesService.getClases()
      .then((mappedEvents) => setClases(mappedEvents))
      .catch((error) => console.error(error));
  }, []);

  console.log(clases);
  return (
    <div style={{ color: "#000" }}>
      {clases.length > 0 ?(
        
        <Scheduler
        events={clases}
        day={null}
        month={null}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6],
          weekStartOn: 1,
          startHour: 6,
          endHour: 20,
          step: 120,
        }}
        editable={true}
        deletable={true}
        draggable={false}
        customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
        viewerExtraComponent={(fields, event) => {
          return (
            <div>
              <p>Description: {event.description || "Nothing..."}</p>
              <p>Profesor: {event.profesor || "Nothing..."}</p>
            </div>
          );
        }}

      />) :
      (
        <p>Cargando clases...</p>
      )}
    </div>
  );
}


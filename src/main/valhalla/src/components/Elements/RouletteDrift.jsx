import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BiTrash, BiGridVertical, BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Roulette";

const RouletteDrift = () => {
  const [inputList, setInputList] = useState([
    {
      id: uuidv4(),
      text: "Barra a una mano",
    },
    {
      id: uuidv4(),
      text: "2x1 Próxima suscripción",
    },
    {
      id: uuidv4(),
      text: "Gatorade morado",
    },
    {
      id: uuidv4(),
      text: "Outfit Nike",
    },
  ]);

  /* // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { text: "", id: uuidv4() }]);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(inputList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setInputList(items);
  } */

  return (
    <div className="main-form-roulette">
      <Roulette data={inputList} />
    </div>
    
  );
};

export default RouletteDrift;

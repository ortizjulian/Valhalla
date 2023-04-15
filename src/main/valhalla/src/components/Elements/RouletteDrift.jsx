import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Roulette";

const RouletteDrift = () => {
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    fetch("/prizes")
      .then((response) => response.json())
      .then((data) => setPrizes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="main-form-roulette">
      <Roulette data={prizes} />
    </div>
  );
};

export default RouletteDrift;

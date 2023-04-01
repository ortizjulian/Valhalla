import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import styled from "styled-components";

const Roulette = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  return (
    <>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[0.2]}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={["#ccc"]}
          outerBorderWidth={[9]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={[10]}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f"
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <Girador className="button-roulette" onClick={handleSpinClick}>
          GIRA
        </Girador>
      </div>
      <br />
      <MensajePremio
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
        {!mustSpin ? rouletteData[prizeNumber].completeOption : "Girando..."}
      </MensajePremio>
    </>
  );
};

export default Roulette;

//Estilos

const Girador = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: +9;
    border-radius: 5rem;
    width: 5rem;
    height: 5rem;
    transform: translate(-55%, -55%);
    background: white;
    color: #000;
    font-size: 0.8rem;
    font-weight: bold;
`

const MensajePremio = styled.button`
border: 1px solid #dcdcdc;
    padding: 20px 35px;
    border-radius: 0.5rem;
    color: #fff;
    max-width: 450px;
    margin: 0 auto;
    cursor: pointer;
    background: #7eb62e;
    background: rgb(35, 155, 99);
    background: linear-gradient(
      0deg,
      rgba(35, 155, 99, 1) 0%,
      rgba(100, 176, 49, 1) 100%
    );`

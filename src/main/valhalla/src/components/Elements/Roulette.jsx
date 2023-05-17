import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import styled from "styled-components";
import CouponsService from "../../services/couponsService";
import prizesService from "../../services/prizesService";

const Roulette = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);
  const [mensajePremio, setMensajePremio] = useState(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

  };

    useEffect(() => {
      
    const addShortString = data.map((item) => {
      return {
        completeOption: item.description,
         option:
          item.description.length >= 30
            ? item.description.substring(0, 30).trimEnd() + "..."
            : item.description
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
            const premio = rouletteData[prizeNumber].completeOption;
            setMensajePremio(<Alert message={`¡Felicidades! ganaste: ${premio}.`} onClose={() => setMensajePremio(null)} />);

            CouponsService.saveCoupon(premio)
              .then((response) => {
                if (response.ok) {        
                  alert("Premio guardado");
                } else {
                  console.error(response );
                  alert("Hubo un error al registrar " + response .message);         
                }
              })
              .catch((error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                alert(resMessage);
              });

            

          }}


        />
        <Girador className="button-roulette" onClick={handleSpinClick}>
          GIRA
        </Girador>
      </div>
      <br />
      {mensajePremio && <Alert message={mensajePremio} onClose={() => setMensajePremio(null)} />}
      

    </>
  );
};

export default Roulette;

//Estilos

const AlertContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const AlertBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  text-align: center;
  color: #000;
`;

const Alert = ({ message, onClose }) => {
  return (
    <AlertContainer>
      <AlertBox>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </AlertBox>
    </AlertContainer>
  );
};


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

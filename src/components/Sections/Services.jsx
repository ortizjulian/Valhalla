import React from "react";
import styled from "styled-components";
// Components

import ServiceBox from "../Elements/ServiceBox";


export default function Services() {
  return (
    <Wrapper id="Servicios">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font50 extraBold">
              Lo que otros Gimnasios NO te ofrencen 😎
            </h1>
            <p className="font20">
              Todas las sedes de nuestro Gimansio💪 se están adapatando para
              ofrecerte el mejor servicio.
              <br />
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="clock"
                title="Los horarios más flexibles"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="weight"
                title="Entrenamiento Personalizado"
                subtitle="Nuestros entrenadores estan 100% cualificados para ponerte en esa figura ideal."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="smartphone"
                title="Seguimiento por la App"
                subtitle="Cor app podras ver tus progresos, rutinas y estar pendiente de los eventos."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="discount"
                title="Bonificaciones y Descuentos"
                subtitle="Constantemente estamos sacando descuentos y promociones y si eres constante te podras ganar algunas sorpresitas 😉."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;







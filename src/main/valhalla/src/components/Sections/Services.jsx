import React from "react";
import styled from "styled-components";
// Components

import ServiceBox from "../Elements/ServiceBox";

export default function Services() {
  return (
    <Wrapper id="Servicios" className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font50 extraBold">Ventajas de afiliarte a valhalla</h1>
          <p className="font20">
            Todas las sedes de nuestro Gimansio💪 se están adapatando para
            ofrecerte el mejor servicio.
            <br />
          </p>
        </HeaderInfo>
        <ServiceBoxRow className="flex">
          <ServiceBoxWrapper>
            <ServiceBox icon="clock" title="Los horarios más flexibles" />
          </ServiceBoxWrapper>
          <ServiceBoxWrapper>
            <ServiceBox icon="weight" title="Entrenamiento Personalizado" />
          </ServiceBoxWrapper>
          <ServiceBoxWrapper>
            <ServiceBox icon="smartphone" title="Seguimiento por la App" />
          </ServiceBoxWrapper>
          <ServiceBoxWrapper>
            <ServiceBox icon="discount" title="Bonificaciones y Descuentos" />
          </ServiceBoxWrapper>
        </ServiceBoxRow>
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
  margin-top: 20px;
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

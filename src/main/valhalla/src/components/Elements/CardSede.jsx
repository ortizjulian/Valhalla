import styled from "styled-components";
import React from "react";
import FullButton from "../Buttons/FullButton";

export default function CardSede({
  imagen,
  barrio,
  ciudad,
  direccion,
  action, 
}) {
  return (
    <CardWrapper >
      <ImageWrapper>
        <Image src={imagen} alt={ciudad} />
      </ImageWrapper>
      <ContentWrapper>
        <CityName>{ciudad}</CityName>
        <NeighborhoodName>{barrio}</NeighborhoodName>
        <Address>{direccion}</Address>
        <ButtonWrapper>
          <FullButton title="Ver más sobre esta sede" action={action} />
        </ButtonWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-left: 5px;
  margin-right: 5px;
  overflow: hidden;
  
`;

const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  &:hover {
    > img {
      transform: scale(1.1);
    }
  }
`;

const Image = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;
  width: 100%;
`;

const ContentWrapper = styled.div`
  background-color: #262B32;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

const CityName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`;

const NeighborhoodName = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`;

const Address = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
  text-align: right;
`;
import React from "react";
import styled from "styled-components";

export default function ProjectBox({ imagen, title, text, action }) {
  return (
    <Wrapper>
      <ImgBtn
        className="aniamte pointer"
        onClick={action ? () => action() : null}
      >
        <ImageWrapper>
          <Image src={imagen} />
          <HoverText>Reservar</HoverText>
        </ImageWrapper>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <Text className="font13">{text}</Text>
    </Wrapper>
  );
}

const Text = styled.p`
  text-align: justify;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    padding-bottom: 10px;
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  &:hover {
    > img {
      transform: scale(1.1);
    }
  }
`;

const Image = styled.img`
  display: block;
  height: 100%;
  border-radius: 10px;
  border-radius: 0.5rem;
  object-fit: cover;
  transition: transform 0.3s ease-out;
  width: 100%;
`;

const ImgBtn = styled.button`
  background-color: black;
  border-radius: 10px;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  &:hover {
    ${Image} {
      opacity: 0.5;
    }
  }
`;

const HoverText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  ${ImgBtn}:hover & {
    opacity: 1;
  }
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardSede from "../Elements/CardSede";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SedesService from "../../services/sedesService";
export default function CarruselSedes() {
  const [sedes, setSedes] = useState([]);

useEffect(() => {
  SedesService.getSedes()
    .then(data => {
      setSedes(data);
    })
    .catch(error => {
      console.error(error);
    });
}, []);


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Wrapper id="Sedes" className="lightBg">
        <SliderContainer className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nuestras Sedes</h1>
            <p className="font13">
              <h2 className="font25 extraBold">Acercate y conocelas</h2>
            </p>
          </HeaderInfo>
          <Slider {...settings}>
            {sedes.map((sede) => (
              <CardSede
                imagen={sede.linkImagen}
                barrio={sede.nombre}
                ciudad={sede.ciudad}
                direccion={sede.direccion}
                action={() => alert("clicked")}
              />
            ))}
          </Slider>
        </SliderContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const SliderContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 55px;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardSede from "../Elements/CardSede";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarruselSedes() {
  const [sedes, setSedes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/sedes")
      .then((response) => response.json())
      .then((data) => setSedes(data))
      .catch((error) => console.error(error));
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
            {/*
            <CardSede
              imagen="https://metropolitano.gal/wp-content/uploads/2022/12/gimnasiog-4.jpg"
              barrio="Laureles"
              ciudad="Medellín"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://etenonfitness.com/wp-content/uploads/2021/12/gimnasio-1024x768.jpeg"
              barrio="Belén"
              ciudad="Medellín"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://andro4all.com/hero/2022/03/Las-mejores-8-aplicaciones-de-rutinas-para-el-gimnasio-1.jpg?width=1200"
              barrio="El tesoro"
              ciudad="Medellín"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://www.elcolombiano.com/documents/10157/0/1200x797/0c85/1200d627/none/11101/OMNV/image_content_30247453_20180115090918.jpg"
              barrio="Chapinero"
              ciudad="Bogotá"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNX7yjfvMuw5QK6irBaqDrgrk0faex9146EQ&usqp=CAU"
              barrio="Centro"
              ciudad="Bogotá"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmLg7qDWngNEjsJRXN0I4iGxIo6GN3qP7wI71JwU4-LwvFv1_FmL7qMTWbLUNEMTxGcw&usqp=CAU"
              barrio="Fontibon"
              ciudad="Bogotá"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy81RnK1uszjgY3CjMP00bg5SSrJXBju2KVjJXCMrISR1_3iPvqlNZ_j-wy5Km6zW_o5A&usqp=CAU"
              barrio="Palmaseca"
              ciudad="Cali"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gyY0IrVtVhEfXsx_thxvyx2wIeHrHTqDSg&usqp=CAU"
              barrio="Ciudad Jardin"
              ciudad="Cali"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />
            <CardSede
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu54x8Pd6ku-uljnRkKOsthMbPz1Qr2zwYZg&usqp=CAU"
              barrio="Pance"
              ciudad="Cali"
              direccion="Carrera 45 #16 - 32"
              action={() => alert("clicked")}
            />*/}

            {sedes.map((sede) => (
              <CardSede
                imagen={sede.linkImagen}
                barrio={sede.barrio}
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

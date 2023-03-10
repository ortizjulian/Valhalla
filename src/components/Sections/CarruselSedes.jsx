import React from "react";
import styled from "styled-components";
import CardSede from "../Elements/CardSede";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarruselSedes() {
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
      <Wrapper id="Sedes">
        <div className="lightBg">
          <SliderContainer className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Nuestras Sedes</h1>
              <p className="font13">
                <h2 className="font25 extraBold">Acercate y conocelas</h2>
              </p>
            </HeaderInfo>
            <Slider {...settings}>
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
            </Slider>
          </SliderContainer>
        </div>
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

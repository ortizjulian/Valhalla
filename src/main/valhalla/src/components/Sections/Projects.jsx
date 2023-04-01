import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import crossfit from "../../assets/img/clases/crossfit.jpg";
import mma from "../../assets/img/clases/mma.jpg";
import yoga from "../../assets/img/clases/yoga.png";
import bodyBalance from "../../assets/img/clases/bodyBalance.jpg";
import xcore from "../../assets/img/clases/xcore.jpg";
import { red } from "@mui/material/colors";

export default function Projects() {
  return (
    <Wrapper id="Clases" className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Nuestras clases</h1>
          <p className="font13">
            <h2 className="font25 extraBold">
              Semanalmente muchas clases para ti
            </h2>
            <br />
            <h2 className="font15 extraBold">Reserva aquí:</h2>
          </p>
        </HeaderInfo>
        <div className="row textCenter">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              imagen="https://feelcrossfit.com/wp-content/uploads/2014/11/Crossfit.jpg"
              title="Crossfit"
              text=" Si buscas un entrenamiento intenso y desafiante que te lleve al límite, ¡esta clase es para ti! En Crossfit, combinamos ejercicios de levantamiento de pesas, entrenamiento cardiovascular y gimnasia para mejorar tu fuerza, resistencia y coordinación. ¡No te pierdas la oportunidad de poner a prueba tus límites y descubrir de lo que eres capaz!"
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              imagen="https://media.gq.com.mx/photos/613f9098b50a5c41a327dd77/16:9/w_2560%2Cc_limit/GettyImages-1252207646.jpg"
              title="MMA"
              text="¿Quieres aprender técnicas de artes marciales y ponerte en forma al mismo tiempo? ¡Entonces esta clase es perfecta para ti! En MMA, combinamos diferentes disciplinas de artes marciales como el boxeo, la lucha, el jiu-jitsu y el kickboxing para que puedas mejorar tu técnica, resistencia y flexibilidad. ¡Anímate a desafiar tu cuerpo y mente con nosotros!"
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              imagen="https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/yoga.jpg"
              title="Yoga"
              text="Si lo que buscas es relajación, conexión con tu cuerpo y mente, y mejorar tu flexibilidad, ¡esta clase es para ti! El yoga es una práctica milenaria que te ayudará a reducir el estrés, mejorar tu postura y aumentar tu concentración. ¡Déjate llevar por la magia del yoga y siente cómo tu cuerpo y mente se transforman!"
              action={() => alert("clicked")}
            />
          </div>
        </div>
        <div className="row textCenter">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              imagen="https://www.aiguajoc.com/wp-content/uploads/2018/07/BodyBalance.jpg"
              title="Body balance"
              text="¿Quieres mejorar tu equilibrio, flexibilidad y fuerza? ¡Entonces esta clase es perfecta para ti! En Body Balance combinamos elementos de yoga, pilates y tai chi para que puedas mejorar tu postura, reducir el estrés y aumentar tu conciencia corporal. ¡Ven y descubre una nueva forma de entrenar tu cuerpo y mente!"
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              imagen="https://www.shksportcentrum.nl/wp-content/uploads/2022/09/Xcore.jpg"
              title="Xcore"
              text="Si lo que buscas es un entrenamiento enfocado en tu core para mejorar tu postura, prevenir lesiones y fortalecer tus músculos abdominales y lumbares, ¡esta clase es para ti! En Xcore realizamos ejercicios de alta intensidad y resistencia para que puedas desafiar a tu cuerpo y descubrir tu máximo potencial. ¡Ven y fortalece tu cuerpo de una manera divertida y efectiva!"
              action={() => alert("clicked")}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <ProjectBox
              imagen="https://www.entrenamiento.com/wp-content/uploads/2019/09/guia-definitiva-iniciar-clases-zumba.jpg?width=1200&enable=upscale"
              title="Zumba"
              text="Si lo que buscas es una actividad divertida y motivadora que te ayude a quemar calorías y mejorar tu coordinación, ¡esta clase es perfecta para ti! En Zumba combinamos baile y ejercicio físico al ritmo de música latina y de otros estilos musicales para que puedas disfrutar mientras te pones en forma. ¡Anímate a mover tu cuerpo con nosotros!"
              action={() => alert("clicked")}
            />
          </div>
        </div>
        <div className="row flexCenter">
          <div
            style={{
              margin: "20px 0px 0px 0px",
              width: "200px",
              backgroundColor: "blue",
            }}
          >
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

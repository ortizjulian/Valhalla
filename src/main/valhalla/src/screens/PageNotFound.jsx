import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Wallpaper>
      <Heading>404 Tierras desconocidas</Heading>
      <br/>
      <Link to="/" activeclassName="active">
          <Sublink>Regresar al inicio</Sublink>
      </Link>
    </Wallpaper>
  );
}

const Wallpaper = styled.body`
  background: url(https://cronicaglobal.elespanol.com/uploads/s1/37/44/47/3/ilustracion-de-un-barco-vikingo.jpeg);
  background-position: center;
  position: relative;
  background-size: cover;
  height: 100vh;
  backdrop-filter: blur(5px);
`;

const Heading = styled.h1`
  padding-top: 30vh;
  color #FFFFFF!important;
  font-size: 4.25rem; /* 36px */
  line-height: 4.5rem; /* 40px */
  text-align: center; 
  text-shadow: 0px 10px 5px black, 10px 0px 15px black
`;

const Sublink = styled.p`
  text-align: center; 
  text-shadow: 0px 3px 5px black, 10px 0px 15px black;
`;
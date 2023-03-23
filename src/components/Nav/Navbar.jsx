import React, { useState } from "react";
import styled from "styled-components";
import { GiVikingHead } from "react-icons/gi";
import ButtonNavBar from "../Buttons/ButtonNavBar";
import Backdrop from "../Elements/Backdrop";

import { BiMenu } from "react-icons/bi";
import Sidebar from "../Nav/Sidebar";
import NavLink from "../Nav/NavLink";

export default function Navbar() {
  const [sidebarOpen, toggleSidebar] = useState(false);

  return (
    <>
      <Container>
        <HeroContainer>
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
          <Wrapper>
            <NavInner className="container flexSpaceCenter">
              <Titulo>
                <IconStyle>
                  <GiVikingHead className="icon-navbar" />
                </IconStyle>
                <h1>Valhalla</h1>
              </Titulo>
              <BurderWrapper
                className="pointer"
                onClick={() => toggleSidebar(!sidebarOpen)}
              >
                <BiMenu className="icon-burder" />
              </BurderWrapper>
              <UlWrapper>
                <NavLink nombre="Sedes" />
                <NavLink nombre="Clases" />
                <NavLink nombre="Precios" />
                <NavLink nombre="Servicios" />
                <NavLink nombre="Contacto" />
              </UlWrapper>
              <LoginButton>
                <ButtonNavBar title="Ingresar" route="/Login" />
                <ButtonNavBar title="Registrarse" route="/Signup" />
              </LoginButton>
            </NavInner>
          </Wrapper>
          <Content>
            <Heading>
              El mejor gimnasio en la
              <br />
              ciudad de Medellín
            </Heading>
          </Content>
        </HeroContainer>
      </Container>
    </>
  );
}

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 975px) {
    display: block;
  }
`;

const IconStyle = styled.div`
  @media (max-width: 975px) {
    margin: 0 auto;
  }
`;

const Titulo = styled.div`
    display: flex;
    padding : 10px;
    justify-content: center;
    color #FFFFFF;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding-bottom: 0.25rem; 
    transition-duration: 300ms; 
    font-weight: 600; 
    letter-spacing: 0.025em; 
    color #FFFFFF;
    
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const LoginButton = styled.ul`
  @media (max-width: 975px) {
    display: none;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 20;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color #FFFFFF!important;
  font-size: 4.25rem; /* 36px */
  line-height: 4.5rem; /* 40px */
  text-align: center; 
`;

const Wrapper = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  @media (max-width: 975px) {
    display: none;
  }
`;

const Container = styled.div`
  background-position: center;
  position: relative;
  background-size: cover;
  height: 100vh;
  min-height: 144px;
  background-image: url("https://blog.smartfit.com.mx/wp-content/uploads/2021/05/gimnasios-definicion-e-historia-1.jpg");
`;

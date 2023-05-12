import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "../Elements/Backdrop";

import { BiMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import {
  AiOutlineBarChart,
  AiFillCalendar,
  AiFillTrophy,
} from "react-icons/ai";

class NavLink extends React.Component {
  render() {
    return (
      <li className="semiBold font15 pointer">
        <Link
          activeClass="active"
          className="whiteColor"
          style={{
            padding: "10px 15px",
            textShadow: "0px -3px 5px black, 0px 3px 5px black",
          }}
          to={this.props.route}
        >
          {this.props.nombre}
        </Link>
      </li>
    );
  }
}

export default function NavbarUser() {
  const [sidebarOpen, toggleSidebar] = useState(false);

  return (
    <>
      <Container id="home" >
        <HeroContainer>
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
          <Wrapper>
            <NavInner className="container flexSpaceCenter">
              <Titulo>
                <h1>Hola, {JSON.parse(localStorage.getItem('user')).nombre}!</h1>
              </Titulo>
              <BurderWrapper
                className="pointer"
                onClick={() => toggleSidebar(!sidebarOpen)}
              >
                <BiMenu className="icon-burder" />
              </BurderWrapper>
              <UlWrapper>
                <NavLink nombre="Bienvenido" route="/user" />
                <NavLink nombre="Estadisticas" route="/user/stats" />
                <AiOutlineBarChart />
                <NavLink nombre="Calendario" route="/user/calendar" />
                <AiFillCalendar />
                <NavLink nombre="Premios" route="/user/prizes" />
                <AiFillTrophy />
              </UlWrapper>
            </NavInner>
          </Wrapper>
          <Content></Content>
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
  backgroundcolor: #0d1117;
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


const Wrapper = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  backgroundcolor: #0d1117;
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  @media (max-width: 975px) {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: #0d1117;
`;

import React, { useState } from "react";
import styled from "styled-components";
import {
  FaBars,
  FaLongArrowAltRight,
  FaRegCalendarAlt,
  FaGift,
} from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { GiVikingHead } from "react-icons/gi";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin",
      name: "Ingreso de usuario",
      icon: <FaLongArrowAltRight />,
    },
    {
      path: "/admin/calendar",
      name: "Calendario",
      icon: <FaRegCalendarAlt />,
    },
    {
      path: "/admin/gift",
      name: "Canjear premios",
      icon: <FaGift />,
    },
    {
      path: "/admin/stats",
      name: "Estadisticas",
      icon: <BiStats />,
    },
  ];
  return (
    <Container>
      <Sidebarsidebar>
        <Topsection>
          <Vikingo
            className="icon-sidebar"
          >
            {<GiVikingHead/>}
          </Vikingo>
          <Logo>
            Valhalla
          </Logo>
          <Bars
            className="bars-sidebar"
          >
            <FaBars/>
          </Bars>
        </Topsection>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="link-sidebar"
            activeclassName="active"
          >
            <Iconsidebar className="icon-sidebar">{item.icon}</Iconsidebar>
            <Link_text
              className="link_text-sidebar"
            >
              {item.name}
            </Link_text>
            <br />
            <br />
          </Link>
        ))}
        <Link to="/" className="link-sidebar" activeclassName="active">
          <Iconsidebar className="icon-sidebar">
            <IoMdExit />
          </Iconsidebar>
          <Link_text
            className="link_text-sidebar"
          >
            Salida
          </Link_text>
        </Link>
      </Sidebarsidebar>
      <Main>{children}</Main>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: white;
  overflow-y: hidden;
`;

const Vikingo = styled.div`
  fontSize: "30px",
  paddingTop: "20px",
  @media (max-width: 2800px) {
    display: block;
  }

  @media (max-width: 800px) {
      display: None
    }
`;

const Sidebarsidebar = styled.div`

  background: #0d1117;
  color: #fff;
  height: 100%;
  transition: all 0.5s;
  
  @media (max-width: 2800px) {
    width: 25%
  }

  @media (max-width: 800px) {
      width: 15%
    }
  
`;

const Topsection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
`;

const Logo = styled.h1`
  font-size: 30px;
  padding: 10px;
  margin-top: 10px;

  @media (max-width: 2800px) {
    display: Block
  }

  @media (max-width: 800px) {
    display: None
  }
`;

const Bars = styled.div`
  display: flex;
  font-size: 25px;
  
  @media (max-width: 2800px) {
    marginLeft: 10%
  }

  @media (max-width: 800px) {
      marginLeft: 0px
    }
`;

const Iconsidebar = styled.div`
  font-size: 30px;
`;

const Link_text = styled.div`
  font-size: 20px;

  @media (max-width: 2800px) {
    display: block;
  }

  @media (max-width: 800px) {
      display: None;
    }
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 0px 20px;
  overflow-y: scroll;
`;

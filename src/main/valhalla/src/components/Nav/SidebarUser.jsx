import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import ButtonNavBar from "../Buttons/ButtonNavBar";
//Icons
import {
  AiOutlineBarChart,
  AiFillCalendar,
  AiFillTrophy,
} from "react-icons/ai";

export default function SidebarUser({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate lightBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
      <UlStyle className="flexSpaceCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/user"
          >
            Home
          </Link>
          
        </li>

        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/user/stats"
          >
            Estadisticas
          </Link>
          <AiOutlineBarChart/>
          
        </li>

        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/user/calendar"
          >
            Calendario
          </Link>
          <AiFillCalendar/>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/user/prizes"
          >
            Premios
          </Link>
          <AiFillTrophy/>
        </li>
      
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  right: 0;
  padding-top: 20px;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;

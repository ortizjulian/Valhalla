import React, { useState } from 'react';
import styled from "styled-components";
import { FaBars, FaLongArrowAltRight, FaRegCalendarAlt, FaGift } from 'react-icons/fa';
import { BiStats } from "react-icons/bi";
import { GiVikingHead } from "react-icons/gi";
import { IoMdExit } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/adminrecord",
            name: "Ingreso de usuario",
            icon: <FaLongArrowAltRight />
        },
        {
            path: "/admincalendar",
            name: "Calendario",
            icon: <FaRegCalendarAlt />
        },
        {
            path: "/admingift",
            name: "Canjear premios",
            icon: <FaGift />
        },
        {
            path: "/adminStats",
            name: "Estadisticas",
            icon: <BiStats />
        },
    ]
    return (
            <Container>
                <Sidebarsidebar style={{ width: isOpen ? "300px" : "50px" }} >
                    <Topsection>
                        <div style={{ fontSize: "25px", paddingTop: "15px", display: isOpen ? "block" : "None" }} className='icon-sidebar'>{<GiVikingHead />}</div>
                        <Logo style={{ display: isOpen ? "block" : "None", marginTop: "5%" }} >Valhalla</Logo>
                        <Bars style={{ marginLeft: isOpen ? "10%" : "0px" }} className='bars-sidebar'>
                            <FaBars onClick={toggle} />
                        </Bars>
                    </Topsection>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link-sidebar" activeclassName="active">
                                <Iconsidebar className='icon-sidebar'>{item.icon}</Iconsidebar>
                                <Link_text style={{ display: isOpen ? "block" : "None" }} className='link_text-sidebar'>{item.name}</Link_text>
                                <br />
                                <br />
                            </NavLink>
                            
                        ))
                    }
                    <NavLink to="/" className="link-sidebar" activeclassName="active">
                        <Iconsidebar className='icon-sidebar'><IoMdExit /></Iconsidebar>
                        <Link_text style={{ display: isOpen ? "block" : "None" }} className='link_text-sidebar'>Salida</Link_text>
                    </NavLink>
                </Sidebarsidebar>
                <Main>{children}</Main>
            </Container>
    )
}

export default Sidebar;

const Container = styled.div`
    height: 100vh;
    display:flex;
    background-color: white;
    overflow-y: hidden;
`;

const Sidebarsidebar = styled.div`
    background: #0d1117;
    color: #fff;
    height: 100%;
    width: 30%;
    transition: all 0.5s;
`;

const Topsection = styled.div`
    display: flex;
    align-items:center;
    padding:20px 15px;
`;


const Logo = styled.h1`
    font-size: 30px;
`;

const Bars = styled.div`
    display: flex;
    font-size: 25px;
    margin-left: 50px;
`;

const Iconsidebar = styled.div`
    font-size: 20px;
`;

const Link_text = styled.div`
    font-size: 20px;
`;

const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 0px 20px;
    overflow-y: scroll;
`;
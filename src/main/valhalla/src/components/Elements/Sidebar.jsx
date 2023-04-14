import React, {useState} from 'react';
import styled from "styled-components";
import { FaBars, FaLongArrowAltRight, FaRegCalendarAlt, FaGift } from 'react-icons/fa';
import { BiStats } from "react-icons/bi";
import { GiVikingHead } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Ingreso de usuario",
            icon: <FaLongArrowAltRight />
        },
        {
            path: "/",
            name: "Calendario",
            icon: <FaRegCalendarAlt />
        },
        {
            path: "/",
            name: "Canjear premios",
            icon: <FaGift />
        },
        {
            path: "/",
            name: "Estadisticas",
            icon: <BiStats />
        },
    ]
    return (
        <div className='container-sidebar'>
            <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar-sidebar'>
                <div className='top_section-sidebar'>
                <div style={{fontSize: "25px",paddingTop:"15px", display: isOpen ? "block" : "None"}}  className='icon-sidebar'>{<GiVikingHead />}</div>
                    <h1 style={{display: isOpen ? "block" : "None", marginTop: "5%"}} className='logo-sidebar'>Valhalla</h1>
                    <div style={{marginLeft: isOpen ? "10%" : "0px"}} className='bars-sidebar'>
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link-sidebar" activeclassName="active">
                            <div className='icon-sidebar'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "None"}} className='link_text-sidebar'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}


export default Sidebar;
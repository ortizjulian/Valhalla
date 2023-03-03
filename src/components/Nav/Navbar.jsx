import React from "react";
import styled from "styled-components";
import { GiVikingHead } from 'react-icons/gi';

export default function Navbar() {
    return (
    <>
        <Container>
            <HeroContainer>
            <Wrapper>
              <NavInner className="container flexSpaceCenter">
                <Titulo>
                  <IconStyle>
                    <GiVikingHead className="icon-navbar"/>
                  </IconStyle>
                  <h1>Valhalla</h1>
                </Titulo>

                <UlWrapper>
                      <NavLink href="/#">Sedes</NavLink>
                      <NavLink href="/#">Servicios</NavLink>
                      <NavLink href="/#">Precios</NavLink>
                      <NavLink href="/#">Contacto</NavLink>
                </UlWrapper>
                  <LoginButton>
                    <NavLinkButton className="semiBold font15 pointer flexCenter">Log in</NavLinkButton>
                  </LoginButton>
              </NavInner>
            </Wrapper>
            <Content>
                <Heading >
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

const IconStyle = styled.div`
  
  @media (max-width: 860px) {
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

`;

const NavLinkButton= styled.button`
  padding : 5px;
  border-radius: 15px;
  width: 90px;
  display: inline-block;
  background-color:#FFFFFF;
  color #000000;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-bottom: 0.25rem; 
  transition-duration: 300ms; 
  font-weight: 600; 
  letter-spacing: 0.025em; 
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

const NavLink = styled.a`
    padding : 20px;
    display: inline-block;
    color #FFFFFF;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding-bottom: 0.25rem; 
    transition-duration: 300ms; 
    font-weight: 600; 
    letter-spacing: 0.025em; 
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
  @media (max-width: 760px) {
    display: none;
  }
`;

const Container = styled.div`
  background-position: center;
  position : relative;
  background-size: cover;
  height: 100vh;
  min-height: 144px;
  background-image: url("https://blog.smartfit.com.mx/wp-content/uploads/2021/05/gimnasios-definicion-e-historia-1.jpg");
`;
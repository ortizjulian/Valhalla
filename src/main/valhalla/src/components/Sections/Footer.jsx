import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { GiVikingHead } from "react-icons/gi";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <FooterContainer id="Contacto" className="lightBg">
      <LogoContainer>
        <GiVikingHead className="icon-footer" />
        <LogoText>Valhalla</LogoText>
      </LogoContainer>
      <SocialContainer>
        <SocialIcon href="#" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
      </SocialContainer>
      <EmailForm onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          placeholder="Ingresa tu correo electronico."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <EmailButton type="submit">
          <FontAwesomeIcon icon={faEnvelope} />
        </EmailButton>
      </EmailForm>
      <FooterLinks>
        <BackToTopLink to="home" offset={-80}>
          <FontAwesomeIcon icon={faArrowUp} />
          Volver al inicio
        </BackToTopLink>
        <Copyright>
          © {getCurrentYear()} - Valhalla Todos los derechos reservados
        </Copyright>
      </FooterLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  padding: 50px 0;
  color: #fff;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: #fff;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4b59f7;
  }
`;

const EmailForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const EmailInput = styled.input`
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  color: #000;
`;

const EmailButton = styled.button`
  padding: 10px 15px;
  background-color: #4b59f7;
  border: none;
  color: #fff;
  border-radius: 0 5px 5px 0;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #4b59f7;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackToTopLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-bottom: 16px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4b59f7;
  }

  & svg {
    margin-right: 8px;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
`;

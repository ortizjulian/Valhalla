import React, { useState } from 'react';
import styled from "styled-components";

import { GiVikingHelmet } from 'react-icons/gi';

import FullButton from "../components/Buttons/FullButton"


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación con el username y password ingresados
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <GiVikingHelmet fontSize= "400%" > </GiVikingHelmet>
        <LoginField>
            
                <Label htmlFor='username'>Ingresa tu cedula: </Label>
              
            <div height = "1000" width = "500" />
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
        </LoginField>

        <LoginField>
        <Label htmlFor='password'>Contraseña: </Label>
        <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
          />
        </LoginField>
        <a href='' className='font20 extraBold' color="black"> Olvidaste tu contraseña?</a>
        <FullButton type="submit" title="Log In" action={() => alert("clicked")} />
        
      </LoginForm>
    </LoginContainer>
      
    
  );
}

export default LoginPage;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("https://blog.smartfit.com.mx/wp-content/uploads/2021/05/gimnasios-definicion-e-historia-1.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 10%;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    opacity: 95%;
`;

const LoginField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
`;









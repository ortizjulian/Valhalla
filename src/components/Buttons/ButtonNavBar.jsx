import React from "react";
import styled from "styled-components";

export default function ButtonNavBar(props) {
  return (
    <a href={props.route}>
        <Wrapper

        className="semiBold font15 pointer flexCenter"
        >
        {props.title} 
        </Wrapper>
    </a>
  );
}

const Wrapper= styled.button`
  margin: 10px; 
  padding : 5px;
  border-radius: 15px;
  width: 120px;
  display: inline-block;
  background-color:#FFFFFF;
  color #000000;
  border-color: #FFFFFF;
  border-style:solid;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-bottom: 0.25rem; 
  transition-duration: 300ms; 
  font-weight: 600; 
  letter-spacing: 0.025em; 
`;
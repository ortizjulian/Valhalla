import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function ButtonNavBar(props) {
  return (
    <>
      <Link to={props.route}>
        <Wrapper className="semiBold font15 pointer flexCenter">
          {props.title}
        </Wrapper>
      </Link>
    </>
  );
}

const Wrapper = styled.button`
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

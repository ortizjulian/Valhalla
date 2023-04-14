import React from "react";
import styled from "styled-components";

export default function Coupon({
    descripcion,
    codigo,
    vigencia,
    color,
  }) {  
    return (
      <Wrapper className="whiteBg radius8">
        <div>
          <h4 className="font30 extraBold ">{codigo}</h4>
          <p className="font13 ">{descripcion}</p>
          <p className="font13 ">{vigencia}</p>
        </div>
      </Wrapper>
    );
  }
  
  const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    padding: 0px;
    margin-top: 30px;
  `;
  
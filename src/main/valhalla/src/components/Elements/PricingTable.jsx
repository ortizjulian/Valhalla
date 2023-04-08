import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
//Iconos
import { GiVikingHelmet } from 'react-icons/gi';
import { GiAngelWings } from 'react-icons/gi';
import { GiCrenelCrown } from 'react-icons/gi';

import CheckMark from "../../assets/svg/Checkmark";


export default function PricingTable({ icon, price, title, text,  offers, action }) {
  let getIcon;

  switch (icon) {
    case "viking":
      getIcon = <GiVikingHelmet className="icon-large lightColor" />;
      break;
    case "wings":
      getIcon = <GiAngelWings className="icon-large lightColor" />;
      break;
    case "crown":
      getIcon = <GiCrenelCrown className="icon-large lightColor" />;
      break;
    default:
      getIcon = <GiVikingHelmet className="icon-large lightColor" />;
      break;
  }

  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="font30 extraBold ">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold ">{title}</h4>
        <p className="font13 ">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font20 extraBold ">{item.name}</p>
              </div>
            ))
          : null}
      </div>
      <div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>
        <FullButton title="Buy" action={action} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

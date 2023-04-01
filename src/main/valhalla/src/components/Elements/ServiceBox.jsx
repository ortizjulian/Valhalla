import React from "react";
import styled from "styled-components";
//Iconos
import { BsClockFill } from 'react-icons/bs';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { TbDiscount2 } from 'react-icons/tb';



export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "clock":
      getIcon = <BsClockFill className="icon-large"/>;
      break;
    case "weight":
      getIcon = <GiWeightLiftingUp className="icon-large"/>;
      break;
    case "smartphone":
      getIcon = <FcSmartphoneTablet className="icon-large"/>;
      break;
    case "discount":
      getIcon = <TbDiscount2 className="icon-large"/>;
      break;
    default:
      getIcon = <GiWeightLiftingUp className="icon-large"/>;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align:center;
`;

const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
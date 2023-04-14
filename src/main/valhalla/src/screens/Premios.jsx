import React from "react";
import styled from "styled-components";
import RouletteDrift from "../components/Elements/RouletteDrift";
import NavbarUser from "../components/Nav/NavbarUser";
import Coupon from "../components/Elements/Coupon";
export default function Premios() {
  return (
    <>
      <NavbarUser></NavbarUser>
       <RouletteDrift />
       <div className="container">
        <Titulo>Cupones</Titulo>
          <TablesWrapper className="flexCenter">
            <TableBox>
              <Estado>Disponible</Estado>
              <Coupon
                descripcion={"Conjunto deportivo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
            </TableBox>
            <TableBox>
              <Estado>Vencido</Estado>
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
            </TableBox>
            <TableBox>
            <Estado>Usado</Estado>
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
              <Coupon
                descripcion={"Termo"}
                codigo={"ABC-987"}
                vigencia={"24/03/2023"}
              />
            </TableBox>
        </TablesWrapper>
       </div>

       

    </>
  );
}

const Titulo = styled.h1`
  text-align: center;
`; 

const Estado = styled.h2`
  text-align: center;
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const TableBox = styled.div`
  width: 20%;
  margin-left: 70px;
  margin-right: 70px;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;

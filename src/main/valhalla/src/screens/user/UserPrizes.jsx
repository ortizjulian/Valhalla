/* import styled from "styled-components";
import RouletteDrift from "../../components/Elements/RouletteDrift";
import NavbarUser from "../../components/Nav/NavbarUser";
import Coupon from "../../components/Elements/Coupon";
import CouponsService from "../../services/couponsService";
export default function UserPrizes() {

  const [Coupon, setCoupon] = useState([]);

  const fetchCoupons = () => {

    CouponsService.getCoupon()
    .then(data => {
      setCoupon(data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  return (
    <>
      <RouletteDrift />
      <div className="container">
        <Titulo>Cupones</Titulo>
        <TablesWrapper className="flexCenter">
          <TableBox1>
            <Estado>Disponibles</Estado>
            <Coupon
              descripcion={"Conjunto deportivo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#2CA22C"}
            />
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#2CA22C"}
            />
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#2CA22C"}
            />
          </TableBox1>
          <TableBox2>
            <Estado>Vencidos</Estado>
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#FF0000"}
            />
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#FF0000"}
            />
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#FF0000"}
            />
          </TableBox2>
          <TableBox3>
            <Estado>Usados</Estado>
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#808080"}
            />
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#808080"}
            />
            <Coupon
              descripcion={"Termo"}
              codigo={"ABC-987"}
              vigencia={"24/03/2023"}
              color={"#808080"}
            />
          </TableBox3>
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

const TableBox1 = styled.div`
  width: 20%;
  margin-left: 70px;
  margin-right: 70px;
  @media (max-width: 860px) {
    width: 100%; */

    import React, { useState, useEffect } from "react";
    import styled from "styled-components";
    import RouletteDrift from "../../components/Elements/RouletteDrift";
    import NavbarUser from "../../components/Nav/NavbarUser";
    import Coupon from "../../components/Elements/Coupon";
    import CouponsService from "../../services/couponsService";
    
    export default function UserPrizes() {
      const [availableCoupons, setAvailableCoupons] = useState([]);
      const [usedCoupons, setUsedCoupons] = useState([]);
      const [expiredCoupons, setExpiredCoupons] = useState([]);
    
      const fetchCoupons = () => {
        CouponsService.getCoupons()
          .then(data => {
            setAvailableCoupons(data[0]);
            setUsedCoupons(data[1]);
            setExpiredCoupons(data[2]);
          })
          .catch(error => {
            console.error(error);
          });
      };
    
      useEffect(() => {
        fetchCoupons();
      }, []);
    
      return (
        <>
          <RouletteDrift />
          <div className="container">
            <Titulo>Cupones</Titulo>
            <TablesWrapper className="flexCenter">
              <TableBox1>
                <Estado>Disponibles</Estado>
                {availableCoupons.map(coupon => (
                  <Coupon
                    key={coupon.idcoupon}
                    descripcion={coupon.idprize.description}
                    codigo={`ABC-${coupon.idcoupon}`}
                    vigencia={coupon.validity}
                    color="#2CA22C"
                  />
                ))}
              </TableBox1>
              <TableBox2>
                <Estado>Vencidos</Estado>
                {expiredCoupons.map(coupon => (
                  <Coupon
                    key={coupon.idcoupon}
                    descripcion={coupon.idprize.description}
                    codigo={`ABC-${coupon.idcoupon}`}
                    vigencia={coupon.validity}
                    color="#FF0000"
                  />
                ))}
              </TableBox2>
              <TableBox3>
                <Estado>Usados</Estado>
                {usedCoupons.map(coupon => (
                  <Coupon
                    key={coupon.idcoupon}
                    descripcion={coupon.idprize.description}
                    codigo={`ABC-${coupon.idcoupon}`}
                    vigencia={coupon.validity}
                    color="#808080"
                  />
                ))}
              </TableBox3>
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
    
    const TableBox1 = styled.div`
      width: 20%;
      margin-left: 70px;
      margin-right: 70px;
      @media (max-width: 860px) {
        width: 100%;
        max-width: 370px;
        max-width: 370px;
        margin: 0 auto;
      }
    `;

    const TableBox2 = styled.div`
      width: 20%;
      margin-left: 70px;
      margin-right: 70px;
      @media (max-width: 860px) {
        width: 100%;
        max-width: 370px;
        margin: 0 auto;
      }
    `;
    const TableBox3 = styled.div`
      width: 20%;
      margin-left: 70px;
      margin-right: 70px;
      @media (max-width: 860px) {
        width: 100%;
        max-width: 370px;
        margin: 0 auto;
      }
    `;

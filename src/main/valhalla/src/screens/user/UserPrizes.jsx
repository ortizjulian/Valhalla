import styled from "styled-components";
import RouletteDrift from "../../components/Elements/RouletteDrift";
import NavbarUser from "../../components/Nav/NavbarUser";
import Coupon from "../../components/Elements/Coupon";
export default function UserPrizes() {
  // useEffect(() => {
  //   fetch("/prizes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.forEach((coupon) => {
  //         fetch(`/beneficios/${plan.id}`)
  //           .then((response) => response.json())
  //           .then((beneficios) => {
  //             setPlanConBeneficios((prevState) => [
  //               ...prevState,
  //               { plan: plan, beneficios: beneficios },
  //             ]);
  //           })
  //           .catch((error) => console.error(error));
  //       });
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
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
    width: 100%;
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

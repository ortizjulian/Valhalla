import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  const [planesConBeneficios, setPlanConBeneficios] = useState([]);

  useEffect(() => {
    fetch("/planes")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((plan) => {
          fetch(`/beneficios/${plan.id}`)
            .then((response) => response.json())
            .then((beneficios) => {
              setPlanConBeneficios((prevState) => [
                ...prevState,
                { plan: plan, beneficios: beneficios },
              ]);
            })
            .catch((error) => console.error(error));
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Wrapper id="Precios" className="lightBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold lightColor">Mira nuestros precios</h1>
          <p className="font20 lightColor">Solicita día de prueba GRATIS.</p>
        </HeaderInfo>
        <TablesWrapper className="flexSpaceNull">
          {planesConBeneficios.map((planConBeneficios) => (
            <TableBox>
              <PricingTable
                price={"$" + planConBeneficios.plan.precio + "/m"}
                title={planConBeneficios.plan.nombre}
                text={planConBeneficios.plan.descripcion}
                offers={planConBeneficios.beneficios.map((beneficio) => ({
                  name: beneficio.descripcion,
                  cheked: true,
                }))}
                action={() => alert("clicked")}
              />
            </TableBox>
          ))}

        </TablesWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;

import styled from "styled-components";
import ButtonSessions from "../../components/Buttons/ButtonSessions";

export default function UserWelcome() {
  return (
    <>
      <Wrapper>
        <h1>Tu suscripcion vence el </h1>
        <ButtonSessions
          title="Renueva"
          onClick={() => {
            
          }}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

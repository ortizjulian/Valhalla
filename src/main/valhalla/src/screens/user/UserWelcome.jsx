import styled from "styled-components";
import ButtonSessions from "../../components/Buttons/ButtonSessions";

export default function UserWelcome() {
  return (
    <Container>
      <Wrapper>
        <h1>Tu suscripcion vence el </h1>
        <ButtonSessions
          title="Renueva"
          onClick={() => {
          
            
          }}
        />
      </Wrapper>
      </Container>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`;


const Container = styled.div`
  background-position: center;
  position: relative;
  background-size: cover;
  height: 100vh;
  min-height: 144px;
  background-image: url("https://i.pinimg.com/originals/a6/8a/aa/a68aaab2f4ba66e7d831d664f6b7b360.jpg");
`;

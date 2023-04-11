import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#1f6feb" : "#fff")};
  background-color: ${(props) => (props.border ? "transparent" : "#0d1117")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#0d1117")};
    border: 1px solid #49cb86;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

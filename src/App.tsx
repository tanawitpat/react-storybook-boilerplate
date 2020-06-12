import React from "react";
import styled from "styled-components";

import Button from "./components/Button";

const StyledButton = styled(Button)`
  background-color: red;
  color: white;
  border: none;
`;

function App() {
  return (
    <StyledButton
      onClick={() => {
        alert("Pong");
      }}
    >
      Ping
    </StyledButton>
  );
}

export default App;

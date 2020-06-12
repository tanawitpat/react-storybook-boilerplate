import React, { useState } from "react";
import styled from "styled-components";

import Button from "./components/Button";

const StyledButton = styled(Button)`
  background-color: red;
  color: white;
  border: none;
`;

const StyledLayout = styled.div`
  width: 200px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledCount = styled.p`
  margin: auto;
  text-align: center;
`;

function App() {
  const [count, setCount] = useState(0);

  const increment = (step: number) => {
    const newCount = count + step;
    setCount(newCount);
  };

  const decrement = (step: number) => {
    const newCount = count - step;
    setCount(newCount);
  };

  return (
    <StyledLayout>
      <StyledButton
        onClick={() => {
          decrement(1);
        }}
      >
        -
      </StyledButton>
      <StyledCount>{count}</StyledCount>
      <StyledButton
        onClick={() => {
          increment(1);
        }}
      >
        +
      </StyledButton>
    </StyledLayout>
  );
}

export default App;

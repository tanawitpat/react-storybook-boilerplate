import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default styled(Button)`
  padding: 20px;
  font-size: 16px;
  color: black;
  background-color: white;
`;

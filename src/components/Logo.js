import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h2`
  font-family; 'Righteous', cursive;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return <LogoText>Galacticats</LogoText>;
};

export default Logo;

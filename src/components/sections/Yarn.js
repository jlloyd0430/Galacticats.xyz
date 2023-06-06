import React from "react";
import styled from "styled-components";
import Button from "../Button";

import imgSrc from "../../assets/Gcimages/showcase2.JPG";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

const Image = styled.img`
  width: 85%;
  max-width: 500px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  background-color: white;
`;

const Scratch = ({
  title,
  description,
  buttonText,
  buttonOnClick,
  buttonLink,
}) => {
  return (
    <Container id="scratch">
      <Image src={imgSrc} alt="Example image" />
      <Description>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <a
          href="https://app-yarn-solutions.onrender.com/#team"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledButton
            text="explore"
            onClick={buttonOnClick}
            href="https://app-yarn-solutions.onrender.com/#team"
          >
            {buttonText}
          </StyledButton>
        </a>
      </Description>
    </Container>
  );
};

export default Scratch;

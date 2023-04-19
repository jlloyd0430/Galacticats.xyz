import React from "react";
import styled from "styled-components";

import img1 from "../../assets/Gcimages/me.JPG";
import img2 from "../../assets/Gcimages/setsuko.JPG";
import img3 from "../../assets/Gcimages/haidar.JPG";
import img4 from "../../assets/Gcimages/yepple.JPG";
import img5 from "../../assets/Gcimages/duty.JPG";
import img6 from "../../assets/Gcimages/15.png";
import img7 from "../../assets/Gcimages/zeitaku.JPG";

import ConfettiComponent from "../Confetti";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const StyledConfettiComponent = styled(ConfettiComponent)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 1025px) and (min-width: 769px) {
    transform: scale(0.8);
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }

  @media (max-width: 1024px) and (min-width: 725px) {
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <StyledConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent
          img={img1}
          name="Sonofabitcoin"
          position="Founder/Developer"
        />

        <MemberComponent
          img={img3}
          name="Haidar"
          position="Co-Founder/Artist"
        />
        <MemberComponent
          img={img5}
          name="Duty"
          position="Community Moderator"
        />
        <MemberComponent
          img={img2}
          name="ken007"
          position="Community Moderator"
        />
        <MemberComponent
          img={img6}
          name="happy"
          position="Community Moderator"
        />
            <div>
              <h2 style={{ margin: 0 }}>Partners</h2>
            </div>
        <MemberComponent
          img={img4}
          name="Yepple"
        />
            
           <MemberComponent
          img={img7}
          name="Zeitaku Dragons"
        />
      </Container>
    </Section>
  );
};

export default Team;

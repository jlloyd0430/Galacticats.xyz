import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.cauroselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }

  & > *::last-child {
    & > *::first-child {
      margin-top: 0;
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="MINT PRICE?">
            yarn= 140 ADA , Galacticats = 100 ADA
          </Accordion>
          <Accordion title="WHAT IS YARN DAO?">
            YARN DAOs primary mission is to get $SCRATCH listed on exchanges and
            create use cases for $SCRATCH balancing the supply and demand.
          </Accordion>
          <Accordion title="WHEN MINT?">the mint date is still TBD.</Accordion>
        </Box>
        <Box>
          <Accordion title="What is $SCRATCH?">
            $SCRATCH is the main utility token for powering the Galactic
            ecosystem. governed by the YARN DAO.
          </Accordion>
          <Accordion title="WHAT DOES THE YARN DO?">
            Yarn nfts earn 2x $SCRATCH then regular Galacticats. holders will
            recieve 1 GalacticatNFT Airdrop, and it will also act as a wl for
            any future mints.Yarn holders will have there own alpha channel in
            our discord, and will have more utility tba.
          </Accordion>
          <Accordion title="WHAT ARE THE GALACTICATS?">
            Galacticats are an orginization of 4444 cats on cardano
            Decentralizing oppurtunity and building a sustainable ecosystem.
            empowering people projects and brands to build.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;

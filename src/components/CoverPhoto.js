import React from "react";
import styled from "styled-components";
import IMG from "../assets/Gcimages/scratch.JPG";

const ImageContainer = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverPhoto = () => {
  return (
    <ImageContainer>
      <video src={IMG} type="image" alt="nft" />
    </ImageContainer>
  );
};

export default CoverPhoto;

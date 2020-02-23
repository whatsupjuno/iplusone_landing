import React from "react";
import styled from "styled-components";

import LocalImageFile from "../Images/BrandImage_rl.png";

export default () => {
  return (
    <Wrapper>
      <LocalImage src={LocalImageFile} alt="Brand Image" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocalImage = styled.img`
  width: 100%;
  @media only screen and (max-width: 720px) {
    width: 100%;
    position: relative;
  }
`;

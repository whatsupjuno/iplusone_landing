import React from "react";
import styled from "styled-components";

import CardImage1 from "../Images/CardImage1_ex.png";
import CardImage2 from "../Images/CardImage2_ex.png";
import CardImage3 from "../Images/CardImage3_ex.png";
import CardImage4 from "../Images/CardImage4_ex.png";

export default () => {
  return (
    <Wrapper>
      <Box>
        <LocalImage src={CardImage1} />
      </Box>
      <Box>
        <LocalImage src={CardImage2} />
      </Box>
      <Box>
        <LocalImage src={CardImage3} />
      </Box>
      <Box>
        <LocalImage src={CardImage4} />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin: 10px;
  width: 100%;
  max-width: 540px;
  @media only screen and (max-width: 720px) {
    width: 97%;
  }
`;

const LocalImage = styled.img`
  width: 100%;
`;

import React from "react";
import styled from "styled-components";

import CardImage1 from "../Images/CardOffice1_ex.png";
import CardImage2 from "../Images/CardOffice2_ex.png";
import CardImage3 from "../Images/CardOffice3_ex.png";
import CardImage4 from "../Images/CardOffice4_ex.png";

export default () => {
  return (
    <Wrapper>
      <Layout>
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
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 850px;
  margin-bottom: 80px;
  display: grid;
  grid-template-rows: repeat(2, 310px);
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  @media only screen and (max-width: 720px) {
    margin: 10px;
    width: 100%;
    display: block;
  }
`;

const Box = styled.div`
  ${"" /* padding: 10px; */}
  float: left;
  ${"" /* width: 540px; */}
  width: 100%;
`;

const LocalImage = styled.img`
  width: 100%;
`;

import React from "react";
import styled from "styled-components";

import CardImage5 from "../Images/CardImage5_ex.png";
import CardImage6 from "../Images/CardImage6_ex.png";
import CardImage7 from "../Images/CardImage7_ex.png";
import CardImage8 from "../Images/CardImage8_ex.png";

export default () => {
  return (
    <Wrapper>
      <Box>
        <LocalImage src={CardImage5} />
      </Box>
      <Box>
        <LocalImage src={CardImage6} />
      </Box>
      <Box>
        <LocalImage src={CardImage7} />
      </Box>
      <Box>
        <LocalImage src={CardImage8} />
        <MessageBox>
          쌍방향적 수업 방식,
          <br />
          쉽고 재미있는 수업을 통한 능동적 수업참여!
        </MessageBox>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #2c4f9f;
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

const MessageBox = styled.p`
  text-align: left;
  font-size: 28px;
  letter-spacing: 2.5px;
  color: #ffffff;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

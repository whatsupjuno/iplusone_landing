import React from "react";
import styled from "styled-components";

// import BG from "../Images/Introduction.png";

export default () => {
  return (
    <Wrapper>
      <BoxWrapper>
        <Box>
          <YellowText>Kinder to 8th Grade</YellowText>
          <GreenText>유치원부터 중등과정까지</GreenText>
        </Box>
        <Box>
          <YellowBoldText>미국공립학교그대로</YellowBoldText>
          <GreenBoldText>학습하는 정통영어</GreenBoldText>
        </Box>
        <Box>
          <WhiteBoldText>공터영어</WhiteBoldText>
          <WhiteText>화곡센터</WhiteText>
        </Box>
      </BoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

/* background-image: url("${BG}"); */

const BoxWrapper = styled.div`
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding: 50px 0px;
  }
`;

const Box = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const YellowText = styled.span`
  font-weight: 300;
  letter-spacing: 1px;
  word-spacing: 4px;
  font-size: 42px;
  color: #fcff00;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const YellowBoldText = styled(YellowText)`
  margin-top: 10px;
  font-weight: bold;
`;

const GreenText = styled.span`
  font-weight: 400;
  letter-spacing: -0.5px;
  font-size: 40px;
  color: #1b9c04;
  @media only screen and (max-width: 600px) {
    font-size: 21px;
  }
`;

const GreenBoldText = styled(YellowBoldText)`
  margin-top: 0px;
  letter-spacing: 3px;
  color: #1b9c04;
`;

const WhiteText = styled.span`
  padding-top: 0px;
  font-size: 55px;
  color: white;
  text-align: center;
  padding-left: 25px;
  letter-spacing: 25px;
  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

const WhiteBoldText = styled(WhiteText)`
  padding-top: 40px;
  font-weight: bold;
  color: #ebf9e9;
`;

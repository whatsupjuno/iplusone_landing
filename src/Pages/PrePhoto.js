import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <Box>
        <MessageBoxBold>빨리 가고 싶은 학원,</MessageBoxBold>
        <MessageBox>집에 가기 싫은 학원!</MessageBox>
        <SubMessageBox>
          화곡초등학교 앞, 편리하고 안전한 위치와 쾌적한 환경, 친근한 인테리어
        </SubMessageBox>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Box = styled.div`
  width: 380px;
  margin: 0 auto;
  height: auto;
  margin-top: 100px;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;
const SubMessageBox = styled.p`
  margin-top: 30px;
  color: #666666;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    max-width: 300px;
    margin: 0 auto;
    font-size: 15px;
    margin-top: 15px;
  }
`;

const MessageBox = styled.p`
  text-align: center;
  font-size: 40px;
  font-weight: nomal;
  color: #222222;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const MessageBoxBold = styled(MessageBox)`
  font-weight: bold;
`;

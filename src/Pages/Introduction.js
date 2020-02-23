import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <GridBox>
        <LineBox />
        <div>
          <TitleBox>공터영어</TitleBox>
          <MessageBox style={{ marginTop: "30px" }}>
            미국 최대의 교육기업 EDGENUTIY사의 컨텐츠에 메타인지와 하브루타 학습
            방식을 점목하여
          </MessageBox>
          <MessageBox>표현 역량을 극대화한 새로운 브랜드, 공터.</MessageBox>

          <MessageBox style={{ marginTop: "30px" }}>
            3개월만에 발음이 달라지고 1년만에 영어가 유창해지는 놀라운 경험!
          </MessageBox>
          <MessageBox>
            짜릿한 희열과 감동, 그리고 확신을 가질 수 있었습니다.
          </MessageBox>
          <GreenMessageBox>
            -공터영어 대표이사 정인수-공통영어 소개문 中
          </GreenMessageBox>
        </div>
      </GridBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const GridBox = styled.div`
  width: 800px;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3% 1fr;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0px 20px;
  }
`;
const LineBox = styled.div`
  margin-top: 50px;
  border-left: 1.5px solid #cdcdcd;
  @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

const TitleBox = styled.h1`
  margin-top: 30px;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    margin-bottom: 0px;
  }
`;

const MessageBox = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #454545;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const GreenMessageBox = styled(MessageBox)`
  color: #00a652;
`;

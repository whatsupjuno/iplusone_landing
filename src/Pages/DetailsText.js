import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <TitleBox>
        실력으로 검증되는 <strong>올바른 영어교육</strong>
      </TitleBox>
      <MessageBox>정말 올바른 영어교육이라면 시간이 지나감에 따라</MessageBox>
      <MessageBox>반드시 실력적인 검증이 뒤따라 오게 됩니다.</MessageBox>
      <MessageBox>
        그래서 공터영어 학원은 시간 흐름에 따라 실력 검증이
      </MessageBox>
      <MessageBox>반드시 생기도록 교육하고 있습니다.</MessageBox>
      <TitleBox>
        미국 공립학교 커리큘럼 그대로
        <br />
        진짜 영어를 배우는 <strong>오리지날 그대로의 정통컨텐츠</strong>
      </TitleBox>
      <MessageBox>공터영어 학원에서는 미국 현지에서 직접 개발한</MessageBox>
      <MessageBox>콘텐츠를 그대로 사용하고 있습니다.</MessageBox>
      <MessageBox>그래서 영어를 분석하지 않고 자연스럽게,</MessageBox>
      <MessageBox>영어를 언어 그대로 받아들여 인식 되도록</MessageBox>
      <MessageBox>교육하고 있습니다.</MessageBox>
      <TitleBox>
        <strong>지식으로서의</strong> 영어 교육이 되도록 진행
      </TitleBox>
      <MessageBox>단순히 언어로서의 영어를 넘어</MessageBox>
      <MessageBox>실질적으로 지식이 쌓일 수 있도록 지도합니다.</MessageBox>
      <MessageBox>
        구체적으로 <strong>확장 영어</strong>라는 프로그램을 개설하여
      </MessageBox>
      <MessageBox>전과목의 교과과정을 대비하는 것은 물론,</MessageBox>
      <MessageBox>여러 자격증 대비까지 가능하도록 하고 있습니다.</MessageBox>
      <TitleBox>
        영어로 말이 되도록, <strong>영어 노출환경이 극대화</strong>
      </TitleBox>
      <MessageBox>원어민의 목소리를 듣고 그대로 따라하며</MessageBox>
      <MessageBox>스스로의 소리를 녹음과 청취를 반복합니다.</MessageBox>
      <MessageBox>그래서 3개월 정도 지나면 아이들이</MessageBox>
      <MessageBox>원어민의 발음에 가깝게 교정이 됩니다.</MessageBox>
      <MessageBox>영어에 많이 노출됨으로써</MessageBox>
      <MessageBox>자신만의 영어가 될 수 있게 교육하고 있습니다.</MessageBox>
      <TitleBox>
        영어를 만나는 경험을 <strong>무한대로 확장</strong>
      </TitleBox>
      <MessageBox>영어 영화제나 영어 뮤지컬 공연을</MessageBox>
      <MessageBox>직접 해보는 영어 무대 경험은 아이들에게</MessageBox>
      <MessageBox>자신감을 키우는 계기가 됩니다.</MessageBox>
      <MessageBox>공터영어 학원에서는 전문 감독님들을 섭외하여</MessageBox>
      <MessageBox>아이들의 영어 무대를 꾸려나가고 있습니다.</MessageBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.h1`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  color: #5ebef8;
  @media only screen and (max-width: 720px) {
    font-size: 20px;
  }
`;

const MessageBox = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #454545;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 720px) {
    font-size: 12px;
  }
`;

import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <Layout>
        <Title>상담 신청하기</Title>
        <Message>상담 받을 성함과 연락처를 남겨주세요!</Message>
        {/* <Message>
          아이의 레벨을 테스트하여 향후 어떤 모습으로 변화하는지 미리
          알려드립니다!
        </Message> */}
        <ButtonLayout>
          <Button>상담 신청하기</Button>
        </ButtonLayout>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 600px;
  margin: 50px auto;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 20px auto;
  }
`;

const Title = styled.h1`
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const Message = styled.p`
  font-size: 20px;
  color: #4b4b4b;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const ButtonLayout = styled.div`
  width: 400px;
  margin: 50px auto;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Button = styled.span`
  cursor: pointer;
  font-size: 30px;
  padding: 25px 50px;
  background: #f5589b;
  border-radius: 50px;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    padding: 20px 20px;
  }
`;

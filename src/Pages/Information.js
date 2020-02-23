import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <Layout>
        <TitleSub>전화문의</TitleSub><Title>010-2871-8054</Title>
        <Message>월~토 / 공휴일 휴무</Message>
        <Message>AM 9:00 ~ PM 10:00</Message>
        <ButtonLayout>
          <Button>전화 걸기</Button>
        </ButtonLayout>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 500px;
  margin: 10px auto;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 20px auto;
  }
`;

const Title = styled.span`
  font-weight: bold;
  margin: 32px 0px;
  font-size:32px;
  display: inline-block;
  @media only screen and (max-width: 600px) {
    font-size:25px
  }
`;

const TitleSub = styled(Title)`
  font-weight: normal;
`;

const Message = styled.p`
  font-size:20px;
  color:#4B4B4B;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size:18px
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
  display: block;
  width: 300px;
  font-size:30px;
  padding:25px 50px;
  background: #53C24C;
  border-radius: 50px;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size:25px;
    width: 250px;
    padding:20px 20px;
  }
`;

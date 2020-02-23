import React, { useEffect } from "react";
import styled from "styled-components";

export default () => {
  useEffect(() => {
    window.emailjs.init("user_UviqpfsTGLvIIagaQ2ZBB");

    window.onload = function() {
      document
        .getElementById("contact-form")
        .addEventListener("submit", async function(event) {
          event.preventDefault();
          const sending = await window.emailjs.sendForm(
            "contact_service",
            "template_U0PMAPMw",
            this
          );
          alert("상담 신청이 완료되었습니다.");
          this.reset();
        });
    };
  }, []);

  return (
    <Wrapper>
      <Layout>
        <Title>상담 신청하기</Title>
        {/* <Message>3개월, 6개월, 12개월 뒤 우리 아이 모습은?</Message>
        <Message>
          아이의 레벨을 테스트하여 향후 어떤 모습으로 변화하는지 미리
          알려드립니다!
        </Message> */}
        <Message>상담받을 성함과 연락처를 남겨주시면 연락드립니다.</Message>
        <form id="contact-form">
          <InputBoxLayout>
            <InputBox type="text" name="from_name" placeholder="성함" />
            <InputBox type="email" name="user_email" placeholder="이메일" />
            <InputBox type="phone" name="contact_number" placeholder="연락처" />
          </InputBoxLayout>
          <TextAreaBox
            name="message_html"
            row="10"
            placeholder="내용"
          ></TextAreaBox>
          <ButtonLayout>
            <SendButton type="submit" value="상담 신청하기" />
          </ButtonLayout>
        </form>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 0px;
  /* background: #f4f4f4; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 600px;
  margin: 50px auto;
  @media only screen and (max-width: 720px) {
    width: 90%;
    margin: 20px auto;
  }
`;

const Title = styled.span`
  text-align: left;
  font-size: 30px;
  letter-spacing: 3px;
  color: #222222;
  opacity: 1;
  @media only screen and (max-width: 720px) {
    font-size: 25px;
  }
`;

const Message = styled.p`
  text-align: left;
  font-size: 25px;
  letter-spacing: 2.2px;
  color: #444444;
  opacity: 1;
  @media only screen and (max-width: 720px) {
    font-size: 18px;
  }
`;

const InputBoxLayout = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 28.5%;
  grid-gap: 5px;
  margin-top: 20px;
`;

const InputBox = styled.input`
  background: #ededed 0% 0% no-repeat padding-box;
  border: 1px solid #7dbbf8;
  opacity: 1;
  padding: 10px;
  font-size: 15px;
`;

const TextAreaBox = styled.textarea`
  margin-top: 5px;
  padding: 10px;
  font-size: 15px;
  width: calc(100% - 20px);
  height: 200px;
  background: #ededed 0% 0% no-repeat padding-box;
  border: 1px solid #7dbbf8;
  opacity: 1;
  resize: none;
`;

const ButtonLayout = styled.div`
  width: 400px;
  margin: 50px auto;
  text-align: center;
  @media only screen and (max-width: 720px) {
    width: 90%;
  }
`;

const SendButton = styled.input`
  cursor: pointer;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #6cb4f3;
  border-radius: 42px;
  opacity: 1;
  font-size: 25px;
  letter-spacing: -0.26px;
  color: #3291e4;
  width: 300px;
  padding: 25px 50px;

  @media only screen and (max-width: 720px) {
    font-size: 20px;
    width: 200px;
    padding: 25px 50px;
  }
`;

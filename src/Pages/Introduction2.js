import React from "react";
import styled from "styled-components";

export default () => {
    return <Wrapper>
        <Box>
            <MessageBox><span style={{fontStyle:"italic",color:"#3AB54A",paddingRight: "2px"}}>영어로 달라지는 아이들</span>이 있습니다.</MessageBox>
            <MessageBox><span style={{fontWeight:"bold",color:"#68C409",paddingRight: "2px"}}>정통영어-표현영어-경험영어</span> 시스템으로</MessageBox>
            <br/>
            <MessageBox>우리 아이들은 <span style={{ color: "#68C409" }}>재미</span> 와 <span style={{ color: "#68C409" }}>자신감</span>, 그리고 <span style={{ color: "#68C409" }}>꿈</span>이 생깁니다.</MessageBox>
        </Box>
    </Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Box = styled.div`
  width: 600px;
  margin: 0 auto;
  height: 200px;
  margin-top: 100px;
  @media only screen and (max-width: 600px) {
    width: 400px;
    height: 150px;
    margin-top: 50px;
  }
`
const MessageBox = styled.p`
  text-align: center;
  font-size:22px;
  font-weight: 500;
  color: #454545;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size:15px;
  }
`

const GreenMessageBox = styled(MessageBox)`
  color: #00A652;
`
import React, { useState } from "react";
import styled from "styled-components";
import DetailsText from "./DetailsText";

export default () => {
  const [isDetail, setIsDetail] = useState(false);

  const handleClick = e => {
    if (isDetail === false) {
      setIsDetail(true);
    } else {
      setIsDetail(false);
    }
  };

  return (
    <Wrapper>
      <MainBar>
        <Button>
          공터영어의 <strong>올바른 영어교육</strong>
        </Button>
        <NonBorderButton onClick={e => handleClick(e)}>
          자세히보기↓
        </NonBorderButton>
        {isDetail === false && <DetailsText />}
      </MainBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0px;
  background: #f4f4f4;
`;

const MainBar = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 30px 0px;
  @media only screen and (max-width: 720px) {
    width: 90%;
    padding: 0px 20px;
  }
`;

const Button = styled.span`
  background: #5ebef8;
  color: white;
  padding: 5px 40px;
  font-size: 35px;
  border-radius: 70px;
  @media only screen and (max-width: 720px) {
    font-size: 15px;
    padding: 5px 10px;
  }
`;

const NonBorderButton = styled.a`
  text-decoration: underline;
  float: right;
  color: #5ebef8;
  cursor: pointer;
  font-size: 25px;
  @media only screen and (max-width: 720px) {
    font-size: 15px;
  }
`;

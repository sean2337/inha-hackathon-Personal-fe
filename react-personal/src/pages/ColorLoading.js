import React from "react";
import styled, { keyframes } from "styled-components";
import { Background } from "../component/Styled";

const circleAnimation = keyframes`
  0%{
    transform: rotate(-90deg);
  }

  50%{
    background-position: 75% 25%;
  }

  100%{
    transform: rotate(120deg);
  }

`;

const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 100%;
  border-right: 3px solid lightgrey;
  border-top: 3px solid lightgrey;
  background: linear-gradient(
      180deg,
      rgba(255, 0, 0, 0.8),
      rgba(210, 0, 0, 0) 70.71%
    ),
    linear-gradient(90deg, rgba(255, 0, 255, 0.8), rgba(140, 62, 150, 0) 70.71%),
    linear-gradient(
      270deg,
      rgba(255, 255, 0, 0.8),
      rgba(215, 195, 51, 0) 70.71%
    ),
    linear-gradient(0deg, rgba(0, 255, 0, 0.8), rgba(120, 150, 100, 0) 70.71%);

  background-size: 150%;
  animation: ${circleAnimation} 3s 0s infinite alternate;
`;

const CircleWrapper = styled.div`
  width: 100%;
  height: 372px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextSection = styled.div`
  width: 272px;
  height: 133px;
  border: 1px solid rgba(217, 217, 217, 0.6);
  border-radius: 8px;
  background-color: white;
`;

const TextWrite = styled.div`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #363636;
  margin-left: 16px;
  margin-top: 24px;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

var textArray = new Array();
textArray[0] = "로딩중입니다.";
textArray[1] = "로딩중입니다....";
textArray[2] = "로딩중입니다........";

let textNum = 0;

function TextChoice() {
  let printText = textArray[textNum];
  textNum = textNum + 1;
  return printText;
}

function FunIteration() {
  setInterval(TextChoice(), 1000);
}

const ColorLoading = () => {
  return (
    <>
      <Background>
        <CircleWrapper>
          <Circle />
        </CircleWrapper>
        <TextWrapper>
          <TextSection>
            <TextWrite>
              당신의 소리를 찾고 있습니다. <br />
              잠시만 기다려주세요...
            </TextWrite>
          </TextSection>
        </TextWrapper>
      </Background>
    </>
  );
};

export default ColorLoading;

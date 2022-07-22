import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextBox, Button, Background } from "../component/Styled";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";

const Mainbox = styled.div`
  width: 272px;
  height: 307px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 90px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 5px 5px rgb(161, 161, 161);
  background-color: #ffffff;
`;

const StepIconWrapper = styled.div`
  float: left;
  text-align: center;
  width: 100%;
  margin-top: ${(props) => props.marginTop || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
`;

const StepIcon = styled.div`
  width: 34px;
  height: 7px;
  border-radius: 20px;
  background: ${(props) => props.background || "lightgray"};
  float: left;
`;

const QuestionBox = styled.div`
  height: 75px;
`;

const MusicQ6 = () => {
  const [buttonState, setButtonState] = useState(0);

  return (
    <>
      <Background>
        <NavLink to={`/musicQ5`}>
          <TextBox
            padding="33px 0 0 20px"
            fontSize="21px"
            fontWeight="bold"
            float="left"
          >
            <FaChevronLeft cursor="pointer" />
          </TextBox>
        </NavLink>
        <TextBox padding="30px 0 0 0" fontSize="21px" fontWeight="bold">
          &nbsp;Music
        </TextBox>

        <StepIconWrapper marginTop="30px" marginLeft="25px">
          <StepIcon background="#EDC21E" />
          <StepIcon background="linear-gradient(90deg, #EDC21E, #df6112)" />
          <StepIcon background="#df6112" />
          <StepIcon background="linear-gradient(90deg, #df6112, #df2a12)" />
          <StepIcon background="linear-gradient(90deg, #df2a12, #df12c7)" />
          <StepIcon background="#df12c7" />
          <StepIcon background="lightgray" />
          <StepIcon background="lightgray" />
        </StepIconWrapper>

        <Mainbox>
          <TextBox
            color="#777777"
            fontSize="17px"
            fontWeight="500"
            padding="16px 0 0 16px"
          >
            Q6.
          </TextBox>
          <QuestionBox>
            <TextBox fontSize="17px" fontWeight="600" padding="16px 0 0 16px">
              10명 중에 자신을 순위로
              <br />
              매겨본다면 상위권인가요?
            </TextBox>
          </QuestionBox>

          <TextBox
            color="#A3A3A3"
            fontSize="14px"
            fontWeight="600"
            padding="41px 0 0 16px"
          >
            NO
          </TextBox>
          <StepIconWrapper marginTop="8px">
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(1)}
              backgroundColor={buttonState >= 1 ? "#fed623" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(2)}
              backgroundColor={buttonState >= 2 ? "#fed623" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(3)}
              backgroundColor={buttonState >= 3 ? "#fed623" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(4)}
              backgroundColor={buttonState >= 4 ? "#fed623" : "#e8e8e8"}
            />
            <Button
              padding="32px 23px 32px 23px"
              margin="1px"
              onClick={() => setButtonState(5)}
              backgroundColor={buttonState >= 5 ? "#fed623" : "#e8e8e8"}
            />
          </StepIconWrapper>
          <TextBox
            color="#A3A3A3"
            fontSize="14px"
            fontWeight="600"
            float="right"
            padding="5px 16px 0 0"
          >
            YES
          </TextBox>
        </Mainbox>
        <NavLink to={buttonState > 0 ? "/musicQ7" : "/musicQ6"}>
          <Button
            padding="8px 40px 8px 40px"
            margin="20px 30px 0 0"
            fontSize="17px"
            fontWeight="700"
            float="right"
            boxShadow="0 5px 5px rgb(161, 161, 161)"
            backgroundColor={
              buttonState > 0
                ? "linear-gradient(to right, #ffe262, #fcce00)"
                : "#e8e8e8"
            }
            color={buttonState > 0 ? "white" : "black"}
            cursor={buttonState > 0 ? "pointer" : "default"}
          >
            다음
          </Button>
        </NavLink>
      </Background>
    </>
  );
};

export default MusicQ6;

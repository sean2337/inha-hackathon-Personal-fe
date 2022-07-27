import React from "react";
import { NavLink } from "react-router-dom";
import { TextBox, Button, Background, Wrapper } from "../component/Styled";
import styled from "styled-components";
import { BsRecordFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

const Mainbox = styled.div`
  width: 272px;
  height: 345px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px lightgray;
  background-color: #e0dbd5;
  text-align: center;
`;

const IconWrapper = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const MusicMainpage = () => {
  return (
    <>
      <motion.div
        initial={animate.initial2}
        animate={animate.animate2}
        exit={animate.exit2}
      >
        <Wrapper>
          <Background>
            <TextBox padding="32px 0 0 24px" fontSize="21px" fontWeight="bold">
              Personal
            </TextBox>
            <TextBox
              padding="44px 0 16px 24px"
              fontSize="17px"
              fontWeight="bold"
            >
              지극히 개인적인, <br />
              나만의 감각을 찾아보세요
            </TextBox>

            <Mainbox>
              <TextBox fontSize="17px" fontWeight="700" padding="210px 0 0 0">
                What's Your
              </TextBox>
              <TextBox fontSize="27px" fontWeight="700" padding="0 50px 15px 0">
                SOUND?
              </TextBox>

              <NavLink to={`/musicQuestionLoading`}>
                <Button
                  padding="8px 80px 8px 80px"
                  backgroundColor="linear-gradient(to right, #fedf56, #ffd000)"
                  fontSize="17px"
                  fontWeight="700"
                  float="center"
                  boxShadow="5px 5px 10px rgb(200, 200, 200)"
                >
                  알아볼까?
                </Button>
              </NavLink>
            </Mainbox>

            <IconWrapper>
              <NavLink to={`/`}>
                <BsRecordFill color="lightgray" size="12px" cursor="pointer" />
              </NavLink>
              &nbsp;
              <BsRecordFill color="gray" size="12px" cursor="pointer" />
            </IconWrapper>
          </Background>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default MusicMainpage;

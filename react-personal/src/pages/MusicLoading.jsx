import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Background, TextBox } from "../component/Styled";
import { Navigate } from "react-router";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

const line1Short = keyframes`
    0% { 
    transform: translate(7000%, -1350%);
  }
  50% {
    transform: translate(7000%, -1290%);
  }
  100% {
    transform: translate(7000%, -1230%);
  }
`;
const line1Long = keyframes`
  0% { 
    transform: translate(7000%, -580%);
  }
  50% {
    transform: translate(7000%, -560%);
  }
  100% {
    transform: translate(7000%, -540%);
  }
`;
const line2 = keyframes`
  0% { 
    transform: translate(7500%, -500%);
  }
  100% {
    transform: translate(7500%, -430%);
  }
`;
const line3 = keyframes`
  0% { 
    transform: translate(8000%, -600%);
  }
  100% {
    transform: translate(8000%, -510%);
  }
`;

const circle1fadein = keyframes`
0% { 
    opacity: 0;
}
25% { 
    opacity: 0;
}
50% {
    opacity: 1;
}
`;
const circle2fadein = keyframes`
0% { 
    opacity: 0;
}
50% {
    opacity: 0;
}
70% {
    opacity: 1;
}
`;
const circle3fadein = keyframes`
0% { 
    opacity: 0;
}
70% { 
    opacity: 0;
}
85% {
    opacity: 1;
}
`;

const Line1Short = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  padding: ${(props) => props.padding || "0"};
  transform: ${(props) => props.translate};
  float: center;
  border: solid 1.2px;
  background-color: black;
  animation: ${line1Short} 2s 0s linear alternate;
`;
const Line1Long = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  padding: ${(props) => props.padding || "0"};
  transform: ${(props) => props.translate};
  float: center;
  border: solid 1.2px;
  background-color: black;
  animation: ${line1Long} 2s 0s linear alternate;
`;
const Line2 = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  padding: ${(props) => props.padding || "0"};
  transform: ${(props) => props.translate};
  float: center;
  border: solid 1.2px;
  background-color: black;
  animation: ${line2} 3s 0s linear alternate;
`;
const Line3 = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  padding: ${(props) => props.padding || "0"};
  transform: ${(props) => props.translate};
  float: center;
  border: solid 1.2px;
  background-color: black;
  animation: ${line3} 4s 0s linear alternate;
`;

const Circle1 = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: ${(props) => props.padding || "0"};
  border-radius: 50%;
  border-color: ${(props) => props.color || "black"};
  border: solid 1.2px;
  transform: ${(props) => props.translate};
  float: center;
  animation: ${circle1fadein} 3s 0s linear alternate;
`;
const Circle2 = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: ${(props) => props.padding || "0"};
  border-radius: 50%;
  border-color: ${(props) => props.color || "black"};
  border: solid 1.2px;
  transform: ${(props) => props.translate};
  float: center;
  animation: ${circle2fadein} 4s 0s linear alternate;
`;
const Circle3 = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: ${(props) => props.padding || "0"};
  border-radius: 50%;
  border-color: ${(props) => props.color || "black"};
  border: solid 1.2px;
  transform: ${(props) => props.translate};
  float: center;
  animation: ${circle3fadein} 5s 0s linear alternate;
`;

const Messagebox = styled.div`
  width: 272px;
  height: 140px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -220%);
  border-radius: 5px;
  border: none;
  box-shadow: 0 5px 5px rgb(170, 170, 170);
  background-color: #fefefe;
`;
const MusicLoading = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4510);
  }, [loading]);
  return (
    <>
      {loading === true ? (
        <motion.div
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
        >
          <Background textAlign="center">
            <Circle1 size="110px" translate="translate(95%, 100%)" />
            <Circle2 size="130px" translate="translate(73%, -8%)" />
            <Circle3 size="150px" translate="translate(57%, -100%)" />
            <Line1Short height="24px" translate="translate(7000%, -1230%)" />
            <Line1Long height="56px" translate="translate(7000%, -540%)" />
            <Line2 translate="translate(7500%, -430%)" />
            <Line3 translate="translate(8000%, -510%)" />
            <Messagebox>
              <TextBox
                color="#363636"
                fontWeight="700"
                fontSize="14px"
                padding="15px 0 0 15px"
                lineHeight="2.0"
              >
                {props.name1}
                <br />
                {props.name2}
                <br />
                <br />
                {props.name3}
              </TextBox>
            </Messagebox>
          </Background>
        </motion.div>
      ) : (
        <Navigate to={props.link} />
      )}
    </>
  );
};

export default MusicLoading;

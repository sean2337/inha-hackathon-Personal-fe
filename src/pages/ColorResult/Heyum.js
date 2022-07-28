import React, { useState, useEffect } from "react";
import {
  Background,
  TextBox,
  CardWrapper,
} from "../../component/Styled/index.js";
import ColorResult1 from "../../component/ColorResult1/index.js";
import Result2 from "../../component/Result2/index.js";
import Result3 from "../../component/Result3/index.js";
import Result4 from "../../component/Result4/index.js";
import ColorLoading from "../ColorLoading.jsx";
import { motion } from "framer-motion";
import { animate } from "../../component/Styled/animate";

const Heyum = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8900);
  }, [loading]);
  return (
    <>
      {loading === true ? (
        <ColorLoading
          lineHeight="28px"
          name1="당신의 색을 찾고 있습니다."
          name2="잠시만 기다려주세요...."
        />
      ) : (
        <motion.div
          initial={animate.initial2}
          animate={animate.animate2}
          exit={animate.exit2}
        >
          <Background height="1370px" top="0" translate="translate(-50%, 0)">
            <TextBox
              padding="32px 0 0 24px"
              fontSize="21px"
              fontWeight="bold"
              float="left"
            >
              Personal
            </TextBox>

            <TextBox
              padding="110px 0 12px 24px"
              fontSize="17px"
              fontWeight="bold"
            >
              나의 색깔은?
            </TextBox>

            <ColorResult1
              colorName="혜윰"
              shortExplain="맑은 강처럼 깊게 헤아리다."
              colorMean="'신뢰와 투명함의 상징'"
              image="https://i.postimg.cc/2ySg8tCW/image.jpg"
              contentHeight="130px"
            >
              맑게 비추는 '가람'은 타인에게 신선한 <br />
              느낌을 전달하여 마음을 깨끗하게 정리해
              <br />
              줍니다.
            </ColorResult1>

            <CardWrapper height="310px" padding="15px 0 0 0">
              <Result2>
                깊이 있는 말과 행동은 어떤 상황에서도 <br />
                성급히 판단하려 들지 않으며 강처럼 넓은 <br />
                포용력을 보여줍니다. <br />
                차분하고 고요한 모습으로 인해 주변 <br />
                사람들에게 신뢰감을 주는 사람입니다.
              </Result2>
              <Result3>
                가끔은 자신만의 깊은 생각들이 이성적인 <br />
                판단으로 이어져 차가운 사람이 되기 쉽습
                <br />
                니다. 또한, 자신의 고민을 잘 나누지 않고 <br />
                혼자서 끌어안는 경우가 많습니다.
              </Result3>
            </CardWrapper>

            <Result4
              link="/musicMain"
              kind="색"
              buttonColor="linear-gradient(to right, #fedf56, #ffd000)"
              suitPlace="잔잔하게 탁 트인 호숫가"
              SuitFriend="타오르는 가온누리"
            />
          </Background>
        </motion.div>
      )}
    </>
  );
};

export default Heyum;

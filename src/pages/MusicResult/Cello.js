import React, { useState, useEffect } from "react";
import {
  Background,
  TextBox,
  CardWrapper,
} from "../../component/Styled/index.js";
import MusicResult1 from "../../component/MusicResult1/index.js";
import Result2 from "../../component/Result2/index.js";
import Result3 from "../../component/Result3/index.js";
import Result4 from "../../component/Result4/index.js";
import MusicLoading from "../MusicLoading.jsx";
import { motion } from "framer-motion";
import { animate } from "../../component/Styled/animate.js";

const Cello = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, [loading]);

  return (
    <>
      {loading === true ? (
        <motion.div
          initial={animate.initial2}
          animate={animate.animate2}
          exit={animate.exit2}
        >
          <MusicLoading
            lineHeight="28px"
            name1="당신의 소리를 찾고 있습니다."
            name2="잠시만 기다려주세요...."
            name3=""
          />
        </motion.div>
      ) : (
        <Background height="1370px" top="0px" translate="translate(-50%, 0)">
          <TextBox
            padding="32px 0 0 24px"
            fontSize="21px"
            fontWeight="bold"
            float="left"
          >
            Personal
          </TextBox>

          <TextBox padding="100px 0 0 24px" fontSize="17px" fontWeight="bold">
            나의 소리는?
          </TextBox>
          <audio src="첼로.mp3" autoplay controls />

          <MusicResult1
            musicName="첼로"
            shortExplain="무슨 일이든 세상의 중심이 된다."
            musicMean="'역동적인 강렬함의 상징'"
            image="첼로.png"
            contentHeight="280px"
          >
            힘, 열정, 적극성이 가장 두드러지는 성격.
            <br />
            이 색을 고른 당신은 무리에서 외향적이며, <br />
            활기차게 행동할 것입니다.
          </MusicResult1>

          <CardWrapper height="310px" padding="15px 0 0 0">
            <Result2>
              매우 진취적이며, 자유를 갈망하고, 행복을
              <br />
              추구합니다. 어떤 일을 하든 포기하지 않고, <br />
              항상 열정적으로 일에 임합니다. <br />
              언제나 앞으로 나아가려 하고, 일을 할 때 항상 적극적인 자세로
              임합니다.
            </Result2>
            <Result3>
              열정이 과다해서 타인의 의견을 무시하는
              <br />
              경향이 있을 수 있습니다.
              <br />
              또한 스스로에게 열중하여 상처가 될 수 있는
              <br />
              말을 서슴없이 하는 경향이 있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            suitPlace="활기와 열정이 넘치는 클럽"
            SuitFriend="라이트 그레이"
          />
        </Background>
      )}
    </>
  );
};

export default Cello;

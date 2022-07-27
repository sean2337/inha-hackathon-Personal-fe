import React, { useState } from "react";
import Violin from "./MusicResult/Violin";
import Piano from "./MusicResult/Piano";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

const MusicResult = () => {
  const [resultNumber, setResultNumber] = useState(2);

  switch (resultNumber) {
    case 1:
      return (
        <>
          <motion.div
            initial={animate.initial}
            animate={animate.animate}
            exit={animate.exit}
          >
            <Violin />
          </motion.div>
        </>
      );
    case 2:
      return (
        <>
          <motion.div
            initial={animate.initial}
            animate={animate.animate}
            exit={animate.exit}
          >
            <Piano />
          </motion.div>
        </>
      );
    default:
      break;
  }
};

export default MusicResult;

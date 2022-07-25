import React, { useState } from "react";
import Violin from "./MusicResult/Violin";
import Piano from "./MusicResult/Piano";

const MusicResult = () => {
  const [resultNumber, setResultNumber] = useState(2);

  switch (resultNumber) {
    case 1:
      return <Violin />;
    case 2:
      return <Piano />;
    default:
      break;
  }
};

export default MusicResult;

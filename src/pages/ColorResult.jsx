import React, { useState } from "react";
import Gaonuri from "./ColorResult/Gaonuri";
import Dubitnarae from "./ColorResult/Dubitnarae";
import FlowerCloud from "./ColorResult/FlowerCloud";
import Gaongil from "./ColorResult/Gaongil";
import Heyum from "./ColorResult/Heyum";
import Laonjena from "./ColorResult/Laonjena";
import Mirr from "./ColorResult/Mirr";
import Onsaemiro from "./ColorResult/Onsaemiro";

const MusicResult = () => {
  const [resultNumber, setResultNumber] = useState(1);

  switch (resultNumber) {
    case 1:
      return (
        <>
          <Dubitnarae />
        </>
      );
    case 2:
      return (
        <>
          <FlowerCloud />
        </>
      );
    case 3:
      return (
        <>
          <Gaongil />
        </>
      );
    case 4:
      return (
        <>
          <Gaonuri />
        </>
      );
    case 5:
      return (
        <>
          <Heyum />
        </>
      );
    case 6:
      return (
        <>
          <Laonjena />
        </>
      );
    case 7:
      return (
        <>
          <Mirr />
        </>
      );
    case 8:
      return (
        <>
          <Onsaemiro />
        </>
      );

    default:
      break;
  }
};

export default MusicResult;

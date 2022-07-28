import React, { useState } from "react";
import Violin from "./MusicResult/Violin";
import Piano from "./MusicResult/Piano";
import Bassoon from "./MusicResult/Bassoon";
import Cello from "./MusicResult/Cello";
import Marimba from "./MusicResult/Marimba";
import Oboe from "./MusicResult/Oboe";
import Organ from "./MusicResult/Organ";
import Timpani from "./MusicResult/Timpani";

const MusicResult = () => {
  const [resultNumber, setResultNumber] = useState(8);

  switch (resultNumber) {
    case 1:
      return (
        <>
          <Bassoon />
        </>
      );
    case 2:
      return (
        <>
          <Cello />
        </>
      );
    case 3:
      return (
        <>
          <Marimba />
        </>
      );
    case 4:
      return (
        <>
          <Oboe />
        </>
      );
    case 5:
      return (
        <>
          <Organ />
        </>
      );
    case 6:
      return (
        <>
          <Piano />
        </>
      );
    case 7:
      return (
        <>
          <Timpani />
        </>
      );
    case 8:
      return (
        <>
          <Violin />
        </>
      );
    default:
      break;
  }
};

export default MusicResult;

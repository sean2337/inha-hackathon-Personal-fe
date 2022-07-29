import React, { useState } from "react";
import Violin from "./MusicResult/Violin";
import Piano from "./MusicResult/Piano";
import Bassoon from "./MusicResult/Bassoon";
import Cello from "./MusicResult/Cello";
import Marimba from "./MusicResult/Marimba";
import Oboe from "./MusicResult/Oboe";
import Organ from "./MusicResult/Organ";
import Timpani from "./MusicResult/Timpani";
import * as soundapi from "../apis/soundApi";

const MusicResult = () => {
  const [resultNumber, setResultNumber] = useState(1);
  //백엔드에서 결과값 불러오기
  let resParam = {};

  //localStorage는 타입이 object이므로 dictionary로 변환
  let element = {};
  element["1"] = localStorage["MQ1"];
  element["2"] = localStorage["MQ2"];
  element["3"] = localStorage["MQ3"];
  element["4"] = localStorage["MQ4"];
  element["5"] = localStorage["MQ5"];
  element["6"] = localStorage["MQ6"];

  resParam["params"] = element;

  soundapi
    .getSound(resParam)
    .then((MusicNum) => {
      setResultNumber(MusicNum.data);
      console.log(MusicNum.data);
      console.log(resParam);
    })
    .catch((error) => {
      console.log("error");
      console.log(resParam);
    });

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

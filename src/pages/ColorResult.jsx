import React, { useState } from "react";
import Gaonuri from "./ColorResult/Gaonuri";
import Dubitnarae from "./ColorResult/Dubitnarae";
import FlowerCloud from "./ColorResult/FlowerCloud";
import Gaongil from "./ColorResult/Gaongil";
import Heyum from "./ColorResult/Heyum";
import Laonjena from "./ColorResult/Laonjena";
import Mirr from "./ColorResult/Mirr";
import Onsaemiro from "./ColorResult/Onsaemiro";
import * as colorapi from "../apis/colorApi";

const ColorResult = () => {
  const [resultNumber, setResultNumber] = useState(9);
  //백엔드에서 결과값 불러오기
  let resParam = {};

  //localStorage는 타입이 object이므로 dictionary로 변환
  let element = {};
  element["1"] = localStorage["CQ1"];
  element["2"] = localStorage["CQ2"];
  element["3"] = localStorage["CQ3"];
  element["4"] = localStorage["CQ4"];
  element["5"] = localStorage["CQ5"];
  element["6"] = localStorage["CQ6"];

  resParam["params"] = element;

  colorapi
    .getColor(resParam)
    .then((colorNum) => {
      setResultNumber(colorNum.data);
    })
    .catch((error) => {
      console.log("error");
      console.log(resParam);
    });

  if (resultNumber === 9) return;
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

export default ColorResult;

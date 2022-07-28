import React, { useState } from "react";
import Gaonuri from "./ColorResult/Gaonuri";

const MusicResult = () => {
  const [resultNumber, setResultNumber] = useState(1);

  switch (resultNumber) {
    case 1:
      return (
        <>
          <Gaonuri />
        </>
      );

    default:
      break;
  }
};

export default MusicResult;

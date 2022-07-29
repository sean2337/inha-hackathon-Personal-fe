import React from "react";
import {
  TextBox,
  Button,
  ButtonWrapper,
  CardWrapper,
  ShareInfoWrapper,
  SnsImage,
} from "../Styled";
import { Link } from "react-router-dom";
import SharemyInfo from "../Styled/SharemyInfo";
import SetShare from "../Share";

const Result4 = (props) => {
  return (
    <>
      <CardWrapper height="170px" padding="15px 0 0 0">
        <TextBox fontSize="17px" fontWeight="700" padding="15px 0 0 32px">
          어울리는 장소
        </TextBox>
        <TextBox
          fontSize="14px"
          fontWeight="500"
          color="#A3A3A3"
          padding="10px 0 15px 32px"
          lineHeight="1.5"
        >
          {props.suitPlace}
        </TextBox>
        <TextBox fontSize="17px" fontWeight="700" padding="10px 0 0 32px">
          어울리는 {props.kind} 유형
        </TextBox>
        <TextBox
          fontSize="14px"
          fontWeight="500"
          color="#A3A3A3"
          padding="10px 0 22px 32px"
          lineHeight="1.5"
        >
          {props.SuitFriend}
        </TextBox>
      </CardWrapper>
      <Button
        cursor="default"
        float="left"
        padding="11px 18px"
        color="#1D1D1F"
        fontSize="17px"
        fontWeight="700"
        margin="40px 0 7px 40px"
      >
        personal 공유
      </Button>

      <SnsImage
        backgroundImage="message.JPG"
        margin="45px 0 7px 16px"
        onClick={SetShare}
      />
      <SnsImage
        backgroundImage="kakao.JPG"
        margin="45px 0 7px 16px"
        onClick={SetShare}
      />
      <Link to={props.link}>
        <ButtonWrapper>
          <Button
            fontWeight="700"
            fontSize="17px"
            height="40px"
            width="240px"
            margin="20px 0 0 0"
            padding="10px"
            backgroundColor={props.buttonColor}
            boxShadow="0 5px 5px rgb(170, 170, 170)"
          >
            나의 {props.next} 알아보기
          </Button>
        </ButtonWrapper>
      </Link>
    </>
  );
};

export default Result4;

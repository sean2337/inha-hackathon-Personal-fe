import React from "react";
import styled from "styled-components";
import { TextBox, Button, Background } from "../component/Styled";
import { Link } from "react-router-dom";
import NavToggle from "../component/Styled/NavToggle";
import SharemyInfo from "../component/Styled/SharemyInfo";

const ResultAllWrapper = styled.div`
  width: 320px;
  max-width: 320px;
  height: 1324px;
  background-color: #f5f5f5;
`;

const ResultTitleWrapper = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
`;

const ResultPersonalName = styled.div`
  width: 91px;
  height: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  margin-top: 32px;
  margin-left: 24px;
  color: #000000;
`;
const Hambug = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 33px;
  margin-left: 272px;
  position: absolute;
`;

const ColorResultHeading = styled.div`
  padding-top: 30px;
  width: 100%;
  height: 21px;
  color: #000000;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  position: block;
  margin-left: 24px;
`;

const InforShow = styled.div`
  width: 319px;
  height: auto;
  padding-bottom: 28px;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 8px;
`;

const TextWrapper = styled.div`
  padding-top: 24px;
`;

const ColorShow = styled.div`
  position: block;
  margin-left: 50px;
  width: 180px;
  height: 180px;
  background: #ffffff;
  border-radius: 8px;
  background-image: url(${(props) => (props.Image ? props.Image : "none")});
  background-size: cover;
  background-repeat: no-repeat;
`;

const DarkText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: #363636;
  position: block;
  margin: 10px;
  padding-top: 5px;
  margin-left: 24px;
  width: 100%;
  font-weight: bold;
`;

const LightText = styled.div`
  width: 254px;
  height: auto;
  margin-left: 24px;
  position: block;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  white-space: pre-wrap;
  color: #a3a3a3;
`;

const CardWrapper = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 20px;
`;

const ShareInfoWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  flex-wrap: nowrap;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Card = (props) => {
  return (
    <>
      <InforShow>
        <ColorShow Image={props.Image} />

        <DarkText>{props.DarkText}</DarkText>
        <LightText>{props.LightText}</LightText>
      </InforShow>

      <InforShow>
        <TextWrapper>
          <DarkText>{props.DarkText2}</DarkText>
          <LightText>{props.LightText2}</LightText>
        </TextWrapper>
      </InforShow>

      <InforShow>
        <TextWrapper>
          <DarkText>{props.Advan}</DarkText>
          <LightText>{props.AdvanEx}</LightText>
          <DarkText>{props.DisAdvan}</DarkText>
          <LightText>{props.DisAdvanEx}</LightText>
        </TextWrapper>
      </InforShow>

      <InforShow>
        <TextWrapper>
          <DarkText>{props.SuitPlace}</DarkText>
          <LightText>{props.SuitPlaceEx}</LightText>
          <DarkText>{props.SuitColor}</DarkText>
          <LightText>{props.SuitColorEx}</LightText>
        </TextWrapper>
      </InforShow>
    </>
  );
};

const ColorResult = () => {
  return (
    <>
      <Background>
        <ResultAllWrapper>
          <ResultTitleWrapper>
            <ResultPersonalName>Personal</ResultPersonalName>
            <Hambug>
              <div className="nav-header">
                <NavToggle />
              </div>
            </Hambug>
          </ResultTitleWrapper>
          <ColorResultHeading>나의 색깔은?</ColorResultHeading>
          <CardWrapper>
            <Card
              Image="https://ifh.cc/g/MnGRGw.jpg"
              DarkText="가온누리"
              LightText="세상의 모든 중심이 된다."
              DarkText2="'역동적인 강렬함의 상징'"
              LightText2="힘, 열정, 적극성이 가장 두드러지는 성격.
              이 색을 고른 당신은 무리에서 외향적이며, 활기
              차게 행동할 것입니다."
              Advan="강점"
              AdvanEx="매우 진취적이며 자유를 갈망하고 행복을 추구합니다.
              어떤 일을 하든 포기하지 않고, 항상 열정적으로 일에 임합니다. 
              언제나 앞으로 나아가려 하고, 일을 할 때 항상 적극적인 자세로 임합니다."
              DisAdvan="약점"
              DisAdvanEx="열정이 과다해서 타인의 의견을 무시하는 경향이 있을 수 있습니다.
              또한 스스로에게 열중하여 상처가 될 수 있는 말을 서슴없이 하는 경향이 있습니다."
              SuitPlace="어울리는 장소"
              SuitPlaceEx="활기와 열정이 넘치는 클럽"
              SuitColor="어울리는 색 유형"
              SuitColorEx="꽃구름"
            />
          </CardWrapper>

          <ShareInfoWrapper>
            <SharemyInfo />
          </ShareInfoWrapper>
          <ButtonWrapper>
            <Link to="/MusicMainpage.js">
              <Button
                onClick={"location.href='MusicMainpage.js'"}
                fontWeight="700"
                fontSize="17px"
                height="40px"
                width="240px"
                margin="24px"
                padding="10px"
                backgroundColor="radial-gradient(71.95% 155.06% at 21.65% 37.7%, rgba(255, 255, 255, 0.48) 12%, rgba(255, 255, 255, 0.06) 100%),#F0C400"
                borderRadius="96px"
              >
                나의 음색 알아보기
              </Button>
            </Link>
          </ButtonWrapper>
        </ResultAllWrapper>
      </Background>
    </>
  );
};

export default ColorResult;

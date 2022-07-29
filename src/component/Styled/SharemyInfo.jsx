import React, { Component } from "react";
import "./SharemyInfo.css";

<script src="https://developers.kakao.com/sdk/js/kakao.js" />;

let shareButton = document.getElementById("share");
Kakao.init("fc42da01882d834a906883eb1b21eff1");

shareButton
  .addEventListener("click", (event) => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "카카오공유하기 시 타이틀",
        description: "카카오공유하기 시 설명",
        imageUrl: "카카오공유하기 시 썸네일 이미지 경로",
        link: {
          mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
          webUrl: "카카오공유하기 시 클릭 후 이동 경로",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
            webUrl: "카카오공유하기 시 클릭 후 이동 경로",
          },
        },
      ],
    });
  })
  .then(function (res) {
    alert("공유 완료!");
  })
  .catch(function (err) {
    alert("공유 실패!");
  });

class SharemyInfo extends Component {
  render() {
    return (
      <>
        <ul>
          <li id="sns">
            <a href="https://www.naver.com/" title="message" />
          </li>
          <li id="sns">
            <a href="https://www.naver.com/" title="insta" />
          </li>
          <li id="sns">
            <a href="https://www.naver.com/" title="kakao" />
          </li>
          <li id="sns">
            <a href="https://www.naver.com/" title="twitter" />
          </li>
        </ul>
      </>
    );
  }
}

export default SharemyInfo;

import axios from "axios";

const request = axios.create({
  baseURL: "https://moomin99.b-cdn.net/",
});

export default request;

// - 데이터 넘기기 o

// 1. cors, 도메인이 다르면 요청을 안보내주기 때문에 백엔드에서 허용을 해줘야 한다. o

// - 배포하기 + 도커 = > 리노드 = 주소

// 2. https-https 맞추기 o

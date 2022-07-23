import styled from "styled-components";

export const TextBox = styled.div`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "10px"};
  float: ${(props) => props.float || "none"};
  padding: ${(props) => props.padding || "0"};
  cursor: ${(props) => props.cursor || "auto"};
`;

export const Button = styled.button`
  cursor: ${(props) => props.cursor || "pointer"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "90px"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || "normal"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.color || "black"};
  float: ${(props) => props.float || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  width: ${(props) => props.width};
`;

export const Background = styled.div`
  background: #f5f5f5;
  border: none;
  position: absolute;
  width: 320px;
  height: 568px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Circle = styled.div`
  background: ${(props) => props.background};
  background-size: ${(props) => props.backgroundSize || "100% 100%"};
  border: ${(props) => props.border || "1px solid #D9D9D9"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  box-shadow: ${(props) => props.boxShadow || "none"};
`;

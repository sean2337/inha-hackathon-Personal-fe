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
  cursor: pointer;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "90px"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || "normal"};
  padding: ${(props) => props.padding || "0"};
  background: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.color || "black"};
  float: ${(props) => props.float || "none"};
`;

import React from "react";
import { textColorBlue } from "../../../assets/colors/colors";
import { text_24 } from "../../../assets/fonts/fonts";
import styled from "styled-components";

const Message = ({ message }) => {
  return <StyledText>{message}</StyledText>;
};

export default Message;

const StyledText = styled.div`
  color: ${textColorBlue};
  ${text_24};
`;

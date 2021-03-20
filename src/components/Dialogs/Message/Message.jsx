import React from "react";
import { textColorBlue } from "../../../assets/colors/colors";
import { text_22 } from "../../../assets/fonts/fonts";
import styled from "styled-components";

const Message = ({ message }) => {
  return <MessageBlock>{message}</MessageBlock>;
};

export default Message;

const MessageBlock = styled.div`
  color: ${textColorBlue};
  ${text_22};
`;

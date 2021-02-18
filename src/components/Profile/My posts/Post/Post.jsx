import React from "react";
import userIcon from "../../../../assets/images/doctor.png";
import styled from "styled-components";
import { textColorBlue } from "../../../../assets/colors/colors";
import { text_24 } from "../../../../assets/fonts/fonts";

const Post = ({ message }) => {
  return (
    <StyledItem>
      <StyledAvatar src={userIcon} />
      <StyledText> {message}</StyledText>
    </StyledItem>
  );
};

export default Post;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  color: rgba(4, 72, 117, 0.822);
  padding: 10px;
`;
const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const StyledText = styled.div`
  color: ${textColorBlue};
  ${text_24};
`;

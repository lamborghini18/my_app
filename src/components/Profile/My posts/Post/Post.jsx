import React from "react";
import userIcon from "../../../../assets/images/doctor.png";
import styled from "styled-components";
import TextStyle from "../../../../assets/fonts/TextStyle";

const Post = ({ message }) => {
  return (
    <StyledItem>
      <StyledAvatar src={userIcon} />
      <TextStyle> {message}</TextStyle>
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

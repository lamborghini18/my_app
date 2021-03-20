import React from "react";
import userIcon from "../../../../assets/images/user.png";
import styled from "styled-components";
import { textColorBlue } from "../../../../assets/colors/colors";
import { text_22 } from "../../../../assets/fonts/fonts";

const Post = ({ message }) => {
  return (
    <PostItem>
      <PostAvatar src={userIcon} />
      <NewPost> {message}</NewPost>
    </PostItem>
  );
};

export default Post;

const PostItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  color: ${textColorBlue};
  padding: 10px;
`;
const PostAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const NewPost = styled.div`
  color: ${textColorBlue};
  ${text_22};
`;

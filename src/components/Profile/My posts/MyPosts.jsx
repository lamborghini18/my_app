import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";
import { textColorBlue } from "../../../assets/colors/colors";
import { text_24, heading_30 } from "../../../assets/fonts/fonts";
import MyPostForm from "./MyPostForm";

const MyPosts = ({ posts, addPost }) => {
  const getPostElements = () => {
    return posts.map((post) => (
      <Post
        message={post.message}
        key={post.id}
        id={post.id}
        likesCount={post.likesCount}
      />
    ));
  };

  const addNewPost = (values) => {
    addPost(values.newPost);
  };

  return (
    <PostsBlock>
      <StyledHeader> My post</StyledHeader>
      <MyPostForm onSubmit={addNewPost} />
      <StyledText>{getPostElements()}</StyledText>
    </PostsBlock>
  );
};

export default MyPosts;

const PostsBlock = styled.div`
  padding: 10px;
`;
const StyledText = styled.div`
  color: ${textColorBlue};
  ${text_24};
`;
const StyledHeader = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;

import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";
import { textColorBlue } from "../../../assets/colors/colors";
import { text_22, heading_30 } from "../../../assets/fonts/fonts";
import MyPostForm from "./MyPostForm";

const MyPosts = React.memo(({ posts, addPost }) => {
  const postElements = posts.map((post) => {
    return (
      <Post
        message={post.message}
        key={post.id}
        id={post.id}
        likesCount={post.likesCount}
      />
    );
  });

  return (
    <PostsBlock>
      <StyledHeader> My post</StyledHeader>
      <MyPostForm addPost={addPost} />
      <StyledPostBlock>{postElements}</StyledPostBlock>
    </PostsBlock>
  );
});

export default MyPosts;

const PostsBlock = styled.div`
  padding: 10px;
`;
const StyledPostBlock = styled.div`
  color: ${textColorBlue};
  ${text_22};
`;
const StyledHeader = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;

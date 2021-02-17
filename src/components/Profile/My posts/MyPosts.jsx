import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import TextStyle from "../../../assets/fonts/TextStyle";
import BigTextStyle from "../../../assets/fonts/BigTextStyle";

const MyPosts = ({ posts, addPost, updateNewPostText, newPostText }) => {
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

  return (
    <PostsBlock>
      <BigTextStyle> My post</BigTextStyle>
      <TextFieldBlock>
        <TextField
          id="outlined-basic"
          label="New post"
          variant="outlined"
          placeholder="Enter your post"
          onChange={(event) => {
            updateNewPostText(event.target.value);
          }}
          value={newPostText}
        />
      </TextFieldBlock>
      <AddPostBlock>
        <Button variant="contained" color="primary" onClick={addPost}>
          Add post
        </Button>
      </AddPostBlock>
      <TextStyle>{getPostElements()}</TextStyle>
    </PostsBlock>
  );
};

export default MyPosts;

const PostsBlock = styled.div`
  padding: 10px;
  color: rgba(4, 72, 117, 0.822);
`;
const AddPostBlock = styled.div`
  margin: 10px 0;
`;
const TextFieldBlock = styled.div`
  margin: 10px 0;
`;

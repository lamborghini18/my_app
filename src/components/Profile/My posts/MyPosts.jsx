import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Button, TextField } from "@material-ui/core";

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
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <TextField
            className={s.newPost}
            id="outlined-basic"
            label="New post"
            variant="outlined"
            placeholder="Enter your post"
            onChange={(event) => {
              updateNewPostText(event.target.value);
            }}
            value={newPostText}
          />
        </div>
        <div className={s.addPost}>
          <Button variant="contained" color="primary" onClick={addPost}>
            Add post
          </Button>
        </div>
      </div>
      <div className={s.posts}>{getPostElements()}</div>
    </div>
  );
};

export default MyPosts;

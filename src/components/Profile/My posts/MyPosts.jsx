import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} id={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
            onChange={onPostChange}
            inputRef={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div className={s.addPost}>
          <Button variant="contained" color="primary" onClick={onAddPost}>
            Add post
          </Button>
        </div>

        <div>
          <Button variant="contained" color="primary">
            Remove
          </Button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;

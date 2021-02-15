import React from "react";
import s from "./Post.module.css";
import userIcon from "../../../../assets/images/doctor.png";

const Post = ({ message }) => {
  return (
    <div className={s.item}>
      <img src={userIcon} />
      <div> {message}</div>
    </div>
  );
};

export default Post;

import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.ejin.ru/wp-content/uploads/2018/11/avatarki_dlya_devushek_4_19105932.jpg" />
      <div> {props.message}</div>
      <div>
        <span>like </span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;

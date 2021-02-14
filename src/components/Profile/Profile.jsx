import React from "react";
import MyPostsConteiner from "./My posts/MyPostsConteiner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsConteiner />
    </div>
  );
};

export default Profile;

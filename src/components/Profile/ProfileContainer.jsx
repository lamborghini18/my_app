import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  updateStatus,
  getStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile_reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const ProfileContainer = ({
  getUserProfile,
  profile,
  match,
  getStatus,
  updateStatus,
  status,
  authUserId,
  history,
  savePhoto,
  saveProfile,
}) => {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = authUserId;
    }
    if (!userId) {
      history.push("/login");
    }
    getUserProfile(userId);
    getStatus(userId);
  }, []);

  return (
    <Profile
      isOwner={!match.params.userId}
      profile={profile}
      getUserProfile={getUserProfile}
      status={status}
      updateStatus={updateStatus}
      savePhoto={savePhoto}
      saveProfile={saveProfile}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  getUserProfile: getUserProfile,
  getStatus: getStatus,
  updateStatus: updateStatus,
  savePhoto: savePhoto,
  saveProfile: saveProfile,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer);

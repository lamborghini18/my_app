import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  updateStatus,
  getStatus,
} from "../../redux/profile_reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileContainer = ({
  getUserProfile,
  profile,
  match,
  getStatus,
  updateStatus,
  status,
}) => {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = 13495;
    }
    getUserProfile(userId);
    getStatus(userId);
  }, []);

  return (
    <Profile
      profile={profile}
      getUserProfile={getUserProfile}
      status={status}
      updateStatus={updateStatus}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

const mapDispatchToProps = {
  getUserProfile: getUserProfile,
  getStatus: getStatus,
  updateStatus: updateStatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

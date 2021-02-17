import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile_reduсer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const ProfileContainer = ({ getUserProfile, profile, match }) => {
  debugger;
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = 13495;
    }
    getUserProfile(userId);
  }, []);

  return <Profile profile={profile} getUserProfile={getUserProfile} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  getUserProfile: getUserProfile,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer);

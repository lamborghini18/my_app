import React, { useEffect } from "react";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers,
} from "../../redux/users_reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const UsersContainer = ({
  getUsers,
  currentPage,
  pageSize,
  isFetching,
  totalUsersCount,
  users,
  unfollow,
  follow,
  followingInProgress,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    getUsers(pageNumber, pageSize);
  };

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        users={users}
        unfollow={unfollow}
        follow={follow}
        followingInProgress={followingInProgress}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);

import React, { useEffect } from "react";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingInProgress,
  requestUsers,
} from "../../redux/users_reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getIsAuth,
} from "../../redux/users_selectors";

const UsersContainer = ({
  requestUsers,
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
    requestUsers(currentPage, pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    requestUsers(pageNumber, pageSize);
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

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//     isAuth: state.auth.isAuth,
//   };
// };
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers,
  })
)(UsersContainer);

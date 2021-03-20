import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";
import User from "./User";

const Users = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  return (
    <div>
      <StyledPaginator>
        <Pagination
          count={pagesCount}
          variant="outlined"
          color="primary"
          defaultCurrent={1}
          showSizeChanger={false}
          onChange={(event, page) => {
            onPageChanged(page);
          }}
          page={currentPage}
        />
      </StyledPaginator>
      <User
        users={users}
        followingInProgress={followingInProgress}
        unfollow={unfollow}
        follow={follow}
      />
    </div>
  );
};

export default Users;

const StyledPaginator = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

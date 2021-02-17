import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

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
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
      {users.map((u) => (
        <StyledUserItems key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <StyledAvatar
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    unfollow(u.id);
                  }}
                >
                  unFollow
                </Button>
              ) : (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    follow(u.id);
                  }}
                >
                  Follow
                </Button>
              )}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
        </StyledUserItems>
      ))}
    </div>
  );
};

export default Users;

const StyledPaginator = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const StyledUserItems = styled.div`
  padding: 10px 10px 10px 20px;
`;
const StyledAvatar = styled.img`
  width: 100px;
`;

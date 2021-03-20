import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const User = ({ users, followingInProgress, unfollow, follow }) => {
  const userItems = users.map((user) => {
    return (
      <UserItemsBlock key={user.id}>
        <NavLink to={`/profile/${user.id}`}>
          <UserPhoto src={user?.photos?.small || userPhoto} />
        </NavLink>
        <div>
          {user.followed ? (
            <Button
              size="small"
              variant="contained"
              color="primary"
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unFollow
            </Button>
          ) : (
            <Button
              size="small"
              variant="contained"
              color="primary"
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </Button>
          )}
        </div>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </UserItemsBlock>
    );
  });

  return (
    <>
      <div>{userItems}</div>
    </>
  );
};

export default User;

const UserItemsBlock = styled.div`
  padding: 10px 10px 10px 20px;
`;
const UserPhoto = styled.img`
  width: 100px;
`;

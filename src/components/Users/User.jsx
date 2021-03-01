import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const User = ({ users, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      {users.map((user) => (
        <StyledUserItems key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <StyledAvatar src={user?.photos?.small || userPhoto} />
              </NavLink>
            </div>
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
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
        </StyledUserItems>
      ))}
    </div>
  );
};

export default User;

const StyledUserItems = styled.div`
  padding: 10px 10px 10px 20px;
`;
const StyledAvatar = styled.img`
  width: 100px;
`;

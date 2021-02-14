import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";

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
      <div>
        <Pagination
          className={styles.paginator}
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
      </div>
      <div>
        {/* {pages.map(p => {
				return <button className={currentPage === p && styles.selectedPage} onClick={(e) => { onPageChanged(p) }}>{p}</button>
			})} */}
      </div>
      {users.map((u) => (
        <div key={u.id} className={styles.userId}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
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
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

import React from 'react';
import s from '../Users/Users.module.css';
import defaultAvatar from '../images/logo23.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, following, unfollowing }) => {
  const u = user;
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              className={s.userPhoto}
              src={u.photos.small != null ? u.photos.small : defaultAvatar}
              alt='avatar'
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                unfollowing(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                following(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'user.location.city'}</div>
          <div>{'user.location.country'}</div>
        </span>
      </span>
    </div>
  );
};

export default User;

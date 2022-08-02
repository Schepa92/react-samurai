import React from 'react';
import Paginator from './Paginator';
import User from './User';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        totalUsersCount={props.totalUsersCount}
        totalCount={props.users.totalCount}
        onPageChanged={props.onPageChanged}
      />
      <div>
        {props.users.map((u) => {
          return (
            <User
              key={u.id}
              user={u}
              followingInProgress={props.followingInProgress}
              following={props.following}
              unfollowing={props.unfollowing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;

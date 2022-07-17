import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import defaultAvatar from '../images/logo23.png';

class Users extends React.Component {
  componentDidMount() {
    // debugger;
    console.log('Open users page');
    if (this.props.users.length === 0)
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
          console.log('Server connected');
          console.log(response.status);
        });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    console.log('Page number is: ' + pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log('Server connected again. Status: ' + response.status);
        console.log();
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div className={s.pageNumbers}>
          {pages.map((p) => {
            return (
              <span
                key={Math.random(this.props.users.totalCount)}
                className={this.props.currentPage === p ? s.selected : ''}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img
                    className={s.userPhoto}
                    src={
                      u.photos.small != null ? u.photos.small : defaultAvatar
                    }
                    alt=''
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.city'}</div>
                  <div>{'u.location.country'}</div>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;

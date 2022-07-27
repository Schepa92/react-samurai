import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log('Open users page');
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        console.log('Server connected. Status: ' + response.status);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    console.log('Page number is: ' + pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        console.log('Server connected again. Status: ' + response.status);
        console.log();
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);

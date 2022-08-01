import { connect } from 'react-redux';
import Friends from './Friends';
import { getUsers } from '../../../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    users: state.usersPage.users,
    isAuth: state.auth.isAuth,
  };
};

const FriendsContainer = connect(mapStateToProps, { getUsers })(Friends);

export default FriendsContainer;

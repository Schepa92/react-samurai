import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {};
// };

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;

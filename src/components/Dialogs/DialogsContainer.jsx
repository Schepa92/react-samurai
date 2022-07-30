import { connect } from 'react-redux';
import { addMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect
)(Dialogs);

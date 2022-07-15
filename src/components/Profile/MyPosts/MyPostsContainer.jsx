import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let newPost = () => {
//     let action = addPostActionCreator();
//     props.store.dispatch(action);
//   };

//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={newPost}
//       posts={state.profilePage.posts}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

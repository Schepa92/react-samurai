import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/store';

const MyPosts = (props) => {
  let postsElements = props.profilePage.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  let newPostElement = React.createRef();

  let newPost = () => {
    props.dispatch(addPostActionCreator());
    newPostElement.current.value = '';
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
    console.log(props.profilePage);
  };

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <textarea onChange={onPostChange} ref={newPostElement} />
      <button onClick={newPost}>Add post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

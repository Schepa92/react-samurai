import { render } from '@testing-library/react';
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { ReactDOM } from 'react';

const MyPosts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  let newPostElement = React.createRef();

  let newPost = () => {
    let text = newPostElement.current.value;
    console.log(text);
    props.addPost(text);
  };

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <textarea ref={newPostElement}></textarea>
      <button onClick={newPost}>Add post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger;
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
        placeholder='Enter your post'
      />
      <button onClick={onAddPost}>Add post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postData = [
    {
      id: 1,
      message: 'How are you?',
      likesCount: 12,
    },
    {
      id: 2,
      message: 'My friend',
      likesCount: 72,
    },
  ];

  let postsElements = postData.map((p) => (
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

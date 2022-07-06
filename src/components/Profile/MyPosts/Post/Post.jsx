import s from './Post.module.css';
import avatar from '../../../images/avatar.jpg';
import like from '../../../images/like.svg';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src={avatar} alt='avatar' />
      <span>{props.message}</span>
      <div>
        <img src={like} className={s.like_button} />
        Like: ({props.likesCount})
      </div>
    </div>
  );
};

export default Post;

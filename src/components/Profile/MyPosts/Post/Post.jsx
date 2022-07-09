import s from './Post.module.css';
import like from '../../../images/like.svg';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src='https://cspromogame.ru//storage/upload_images/avatars/4081.jpg'
        alt='avatar'
      />
      <span>{props.message}</span>
      <div>
        <img src={like} className={s.like_button} />
        Like: ({props.likesCount})
      </div>
    </div>
  );
};

export default Post;

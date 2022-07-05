import s from './Profile.module.css';

function Content() {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.content__header}
          src='https://gratisography.com/wp-content/uploads/2022/06/gratisography-boom-box-free-stock-photo-1170x780.jpg'
        />
      </div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Novosibirsk_Metro_logo.svg/97px-Novosibirsk_Metro_logo.svg.png' />
      </div>
      <div>My posts</div>
      <div>New post</div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
}

export default Content;

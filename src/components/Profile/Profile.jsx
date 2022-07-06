import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
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
      <MyPosts />
    </div>
  );
};

export default Profile;

import s from '../Profile.module.css';
import React from 'react';

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={s.content__header}
        src='https://gratisography.com/wp-content/uploads/2022/06/gratisography-boom-box-free-stock-photo-1170x780.jpg'
        alt='header-logo'
      />
    </div>
  );
};

export default ProfileInfo;

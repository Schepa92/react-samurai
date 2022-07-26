import s from '../Profile.module.css';
import React from 'react';
import Preloader from '../../Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <img
        className={s.content__header}
        src='https://gratisography.com/wp-content/uploads/2022/06/gratisography-boom-box-free-stock-photo-1170x780.jpg'
        alt='header-logo'
      /> */}
      <img src={props.profile.photos.large} alt='' />
      <h3>Name: {props.profile.fullName}</h3>
    </div>
  );
};

export default ProfileInfo;

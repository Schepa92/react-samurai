import React from 'react';
import Preloader from '../../Preloader/Preloader';
import defaultAvatar from '../../images/logo23.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        src={
          props.profile.photos.large === null
            ? defaultAvatar
            : props.profile.photos.large
        }
        alt='avatar'
      />
      <h3>Name: {props.profile.fullName}</h3>
      <p>Status:</p>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;

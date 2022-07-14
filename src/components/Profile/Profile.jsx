import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </>
  );
};

export default Profile;

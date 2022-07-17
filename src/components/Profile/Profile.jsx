import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
  console.log('Open Profile Page');
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </>
  );
};

export default Profile;

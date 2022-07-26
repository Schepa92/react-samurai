import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  console.log('Open Profile Page');
  // debugger;
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </>
  );
};

export default Profile;

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} />
    </>
  );
};

export default Profile;

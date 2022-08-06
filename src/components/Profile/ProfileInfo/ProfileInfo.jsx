import React from 'react';
import Preloader from '../../Preloader/Preloader';
import defaultAvatar from '../../images/logo23.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import { saveProfile } from '../../../redux/profileReducer';

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b className={s.contactTitle}>{contactTitle}</b> : {contactValue}
    </div>
  );
};

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const ProfileData = (props) => {
    return (
      <div>
        {props.isOwner && (
          <div>
            <button onClick={props.goToEditMode}>Edit</button>
          </div>
        )}
        <div>
          <b>Full name:</b> {props.profile.fullName}
        </div>
        <div>
          <b>Looking for a job:</b>{' '}
          {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {props.profile.lookingForAJob && (
          <div>
            <b>My professionals: </b>
            {props.profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div>
          <b>Contacts:</b>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
                key={key}
              />
            );
          })}
        </div>
      </div>
    );
  };

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
      <div>
        {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
      </div>
      <p>Status:</p>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      {editMode ? (
        <ProfileDataForm
          profile={props.profile}
          saveProfile={props.saveProfile}
          closeEditMode={() => {
            setEditMode(false);
          }}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

export default ProfileInfo;

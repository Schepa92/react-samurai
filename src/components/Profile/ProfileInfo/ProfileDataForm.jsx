import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Contact } from './ProfileInfo';

const ProfileDataForm = ({ profile, saveProfile, closeEditMode }) => {
  return (
    <Formik
      initialValues={{
        fullName: profile.fullName,
        aboutMe: profile.aboutMe,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        lookingForAJob: profile.lookingForAJob,
        contacts: {
          facebook: profile.contacts.facebook,
          website: profile.contacts.website,
          vk: profile.contacts.vk,
          twitter: profile.contacts.twitter,
          instagram: profile.contacts.instagram,
          youtube: profile.contacts.youtube,
          github: profile.contacts.github,
          mainLink: profile.contacts.mainLink,
        },
      }}
      onSubmit={(values, { setSubmitting }) => {
        saveProfile({
          fullName: values.fullName,
          aboutMe: values.aboutMe,
          lookingForAJobDescription: values.lookingForAJobDescription,
          lookingForAJob: values.lookingForAJob,
          contacts: {
            facebook: values.contacts.facebook,
            website: values.contacts.website,
            vk: values.contacts.vk,
            twitter: values.contacts.twitter,
            instagram: values.contacts.instagram,
            youtube: values.contacts.youtube,
            github: values.contacts.github,
            mainLink: values.contacts.mainLink,
          },
        });
        closeEditMode();
      }}
    >
      {() => (
        <Form>
          <div>
            Full name:
            <Field name='fullName' placeholder='Full name' />
          </div>

          <div>
            <Field type='checkbox' name='lookingForAJob' />
            Looking for a job?
          </div>
          <div>
            <b>My professionals: </b>
            <Field
              name='lookingForAJobDescription'
              placeholder='Looking for a Job Description'
            />
          </div>
          <div>
            aboutMe: <Field name='aboutMe' placeholder='About Me' />
          </div>

          <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map((key) => {
              return (
                <div>
                  <b>{key}:</b>
                  <Field name={'contacts.' + key} placeholder={key} key={key} />
                </div>
              );
            })}
          </div>
          <div>
            <button type='submit'>Save</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default ProfileDataForm;

import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field } from 'formik';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} />
  ));

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <Formik
        initialValues={{ post: '' }}
        onSubmit={(values, { resetForm }) => {
          props.addPost(values.post);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <Field name='post' placeholder='Enter your post' />
            <button type='submit' disabled={!values.post}>
              Add post
            </button>
          </Form>
        )}
      </Formik>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

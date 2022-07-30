import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ login: '', password: '', rememberMe: false }}
        validate={(values) => {
          const errors = {};
          if (!values.login) {
            errors.login = 'Invalid login';
          } else if (!values.password) {
            errors.password = 'Invalid password';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            props.login(values.login, values.password, values.rememberMe);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div>
              <Field type='text' name='login' placeholder='Login' />
              <ErrorMessage name='login' component='div' />
            </div>
            <div>
              <Field type='password' name='password' placeholder='Password' />
              <ErrorMessage name='password' component='div' />
            </div>
            <div>
              <Field type='checkbox' name='rememberMe' />
              Remember me
            </div>
            <div>
              <button
                type='submit'
                disabled={(isSubmitting, !values.login || !values.password)}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);

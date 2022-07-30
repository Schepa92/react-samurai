import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Formik, Form, Field } from 'formik';

const Dialogs = (props) => {
  console.log('Open Dialogs Page');

  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messagesElements}>{messagesElements}</div>
        <Formik
          initialValues={{ message: '' }}
          onSubmit={(values, { resetForm }) => {
            props.addMessage(values.message);
            resetForm();
          }}
        >
          {({ values }) => (
            <Form className={s.sendMess}>
              <Field placeholder='Enter your message' name='message' />
              <button type='submit' disabled={!values.message}>
                Add Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Dialogs;

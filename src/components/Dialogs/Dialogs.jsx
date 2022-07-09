import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsData = [
    {
      name: 'Sergey',
      id: 1,
    },
    {
      name: 'Andrew',
      id: 2,
    },
    {
      name: 'Alex',
      id: 3,
    },
    {
      name: 'Vlad',
      id: 4,
    },
  ];

  let messagesData = [
    {
      message: 'Hello',
      id: 1,
    },
    {
      message: 'Helweerefdlo',
      id: 2,
    },
    {
      message: 'Aldfsewex',
      id: 3,
    },
    {
      message: 'Vwefewflad',
      id: 4,
    },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;

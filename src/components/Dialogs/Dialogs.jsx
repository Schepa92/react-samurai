import s from './Dialogs.module.css';
import { useParams } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  // console.log(useParams());
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <Dialog name='Sergey' id='1' />
        <Dialog name='Andrey' id='2' />
        <Dialog name='Alex' id='3' />
        <Dialog name='Vlad' id='4' />
        <Dialog name='Valera' id='5' />
      </div>
      <div className={s.messages}>
        <Message message='Hello!' />
        <Message message='Hello!21e2e' />
        <Message message='Hellorrwee!' />
        <Message message='Helweerefdlo!' />
        <Message message='Heldsfdlo!' />
      </div>
    </div>
  );
};

export default Dialogs;

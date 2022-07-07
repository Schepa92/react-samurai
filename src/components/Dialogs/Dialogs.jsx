import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' ' + s.active}>Sergey</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Dima</div>
        <div className={s.dialog}>Alex</div>
        <div className={s.dialog}>Vlad</div>
        <div className={s.dialog}>Valera</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How is your It-kamasutra</div>
        <div className={s.message}>Yo!</div>
      </div>
    </div>
  );
};

export default Dialogs;

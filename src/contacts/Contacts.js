import style from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'


function Contacts() {
  return (
    <div className={style.contacts}>
      <div className={`${sContainer.container} ${style.contactsContainer}`}>
        <div className={style.contactsBlock}>
          <div>Contacts</div>
          <div className={style.info}>
            <input placeholder='company name' />
            <input placeholder='email' />
            <textarea placeholder='description' />
          </div>
          <button className={style.btn}>send</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts; 
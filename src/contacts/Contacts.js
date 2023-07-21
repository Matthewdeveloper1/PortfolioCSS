import style from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';


function Contacts() {
  return (
    <div className={style.contacts}>
      <div className={`${sContainer.container} ${style.contactsContainer}`}>
        <div className={style.contactsBlock}>
          <Title text = {'Contacts'}/>
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
import style from './footer.module.scss'
import sContainer from '../common/styles/Container.module.css'



function Footer() {
  return (
    <div className={style.footer}>
      <div className={`${sContainer.container} ${style.contactsContainer}`}>
       <footer>
          <a href=''>home</a>
          <a href=''>language</a>
          <a href=''>social media</a>
          <a href=''>services</a>
          <a href=''>contact</a>
          <a href=''>help</a>
       </footer>
      </div>
    </div>
  );
}

export default Footer; 
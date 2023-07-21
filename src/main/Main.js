
import sContainer from  '../common/styles/Container.module.css'
import style from './Main.module.scss'
import myPhoto from '../assets/image/Matthew.png'

function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={sContainer.container}>
        <div className={style.text}>
          <span>Hi there</span>
          <h1>I am Matthew Helich</h1>
          <p>Frontend developer</p>
        </div>
        <div className={style.photo}>
          <img src={myPhoto} alt='фото'/>
        </div>
      </div>
    </div>
  );
}

export default Main;
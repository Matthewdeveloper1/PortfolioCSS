
import sContainer from  '../common/styles/Container.module.css'
import style from './Main.module.css'

function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={sContainer.container}>
        <div className={style.text}>
          <span>Hi there</span>
          <h1>I am Matthew Helich</h1>
          <p>Frontend developer</p>
        </div>
        <div className={style.photo}>photo</div>
      </div>
    </div>
  );
}

export default Main;
import style from './Project.module.css'



function Project(props) {
  return (
    <div className = {style.project}>
      <div>
      <div className={style.picture}>
          <span>Picture</span>
          <button>Show</button>
      </div>
      <div className={style.projectName}>{props.title}</div>
      <span className={style.projectDes}>{props.description}</span>
      </div>
    </div>
  );
}

export default Project;
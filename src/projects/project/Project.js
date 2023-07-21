import style from './Project.module.scss'



function Project(props) {
  return (
    <div className = {style.project}>
      <div>
      <div className={style.picture} style={props.style}>
          <button className={style.showBtn}>Show</button>
      </div>
      <div className={style.projectInfo}>
        <h3 className={style.projectName}>{props.title}</h3>
        <span className={style.projectDes}>{props.description}</span>
      </div>
      </div>
    </div>
  );
}

export default Project;
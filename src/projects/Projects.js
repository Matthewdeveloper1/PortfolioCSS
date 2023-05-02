import style from './Projects.module.css'
import sContainer from  '../common/styles/Container.module.css'
import Project from './project/Project';


function Projects() {
  return (
    <div className = {style.projects}>
      <div className = {`${sContainer.container} ${style.skillContainer}`}>
        <h4 className ={style.projectTitle}>My projects</h4>
          <div className={style.projectsList}>
            <Project title = {'name'} description = {'hsagdjhsaghjdgsajhgdhjasgdgasjgdjsadgjhsagdhsgsadasdgasdhsagjahajhjhjahjajahj'}/>
            <Project title = {'name'} description = {'hsagdjhsaghjdgsajhgdhjasgdgasjgdjsadgjhsagdhsg'}/>
          </div>
      </div>
    </div>
  );
}

export default Projects;
import style from './Projects.module.scss'
import sContainer from  '../common/styles/Container.module.css'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImg from './../assets/image/todo.png'
import socialImg from './../assets/image/social.png'


function Projects() {
  const socialNetwork = {
    backgroundImage: `url(${socialImg})`,

  }
  const todo = {
    backgroundImage: `url(${todoImg})`,

  }
  return (
    <div className = {style.projects}>
      <div className = {`${sContainer.container} ${style.skillContainer}`}>
        <Title text = {'Projects'}/>
          <div className={style.projectsList}>
            <Project style = {socialNetwork} title = {'Social Network'} description = {'my project social network'}/>
            <Project style = {todo} title = {'Todo List'} description = {'my project todo list'}/>
          </div>
      </div>
    </div>
  );
}

export default Projects;
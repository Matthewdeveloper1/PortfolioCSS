import style from './Skills.module.scss'
import sContainer from  '../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';

function Skills() {
 
 
  return (
    <div className = {style.skillsBlock}>
      <div className = {`${sContainer.container} ${style.skillsContainer}`}>
        <Title text = {'Skills'}/>
        <div className={style.skills}>
          <Skill title = {'Js'} logo = {'JS'} description = {
            'HTML'
          }/>
          <Skill title = {'React'} logo = {'REACT'} description = {
            'CSS'
          }/>
          <Skill title = {'HTML'} logo = {'HTML'} description = {
            'JS'
          }/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
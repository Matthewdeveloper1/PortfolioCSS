import style from './Skills.module.css'
import sContainer from  '../common/styles/Container.module.css'
import Skill from './skill/Skill';

function Skills() {
  return (
    <div className = {style.skillsBlock}>
      <div className = {`${sContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title = {'Js'} description = {
            'lasdklsakdklasdk'
          }/>
          <Skill title = {'React'} description = {
            'lasdklsakdklasdk'
          }/>
          <Skill title = {'HTML'} description = {
            'lasdklsakdklasdk'
          }/>
          {/* <Skill title = {'CSS'} description = {
            'lasdklsakdklasdk'
          }/>
          <Skill title = {'Redux'} description = {
            'lasdklsakdklasdk'
          }/> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
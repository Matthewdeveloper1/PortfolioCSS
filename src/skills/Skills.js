import style from './Skills.module.scss'
import sContainer from  '../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
function Skills() {
 
 
  return (
    <div className = {style.skillsBlock}>
      <div className = {`${sContainer.container} ${style.skillsContainer}`}>
        <Title text = {'Skills'}/>
        <div className={style.skills}>
          <Skill title = {'Js'} logo = {<ThreeSixtyIcon  sx={{ fontSize: 35 }}/>} description = {
            'HTML'
          }/>
          <Skill title = {'React'} logo = {<ThreeSixtyIcon  sx={{ fontSize: 35 }}/>} description = {
            'CSS'
          }/>
          <Skill title = {'HTML'} logo = {<ThreeSixtyIcon  sx={{ fontSize: 35 }}/>} description = {
            'JS'
          }/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
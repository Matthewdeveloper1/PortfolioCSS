import title from './Title.module.scss'



function Title(props) {
  return (
        <div className ={title.Title}>
          <h2>{props.text}</h2>
        </div>
  );
}

export default Title;
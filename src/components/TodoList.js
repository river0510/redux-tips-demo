import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './todolist.cssmodule.css';

class TodoList extends React.Component {

  render() {
  	const {todo, toggle, visibility} = this.props;
  	let list = [];
  	todo.forEach((item, index)=>{
      let textDecoration = item.isCompleted ? {textDecoration: "line-through"} : {textDecoration: "none"};
      let display;
      if(visibility.filter === "all"){
        display = {}
      }else if(visibility.filter === "active"){
        display = item.isCompleted ? {display: "none"} : {}
      }else{
        display = item.isCompleted ? {} : {display: "none"}
      }
      let style = {...display,...textDecoration}
      console.log(style)
	  if(item.text)
		list.push(<li key={item.id} style={style} onClick={e => {
			e.preventDefault();
			toggle(item.id);
			console.log(item.isCompleted);
		}}>{item.text}</li>);
  	})
    return (
      <div className="todolist-component" styleName="todolist-component">
        {list}
      </div>
    );
  }
}

TodoList.displayName = 'TodoList';
TodoList.propTypes = {};
TodoList.defaultProps = {};

export default cssmodules(TodoList, styles);

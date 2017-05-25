import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './addtodo.cssmodule.css';

class AddTodo extends React.Component {

  render() {
    return (
      <div className="addtodo-component" styleName="addtodo-component">
			<input type="text" ref='input'/>
			<button onClick={e => {
				e.preventDefault();
				let node = this.refs.input;
				let text = node.value.trim();
				this.props.addTodo(text);
				node.value = '';
			}}>AddTodo</button>
      </div>
    );
  }
}

AddTodo.displayName = 'AddTodo';
AddTodo.propTypes = {};
AddTodo.defaultProps = {};

export default cssmodules(AddTodo, styles);

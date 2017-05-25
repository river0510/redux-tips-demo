import React from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import VisibilityFilter from './VisibilityFilter'
import './app.css';

class AppComponent extends React.Component {

  render() {
    const {actions, todo, filter} = this.props;
    return (
      <div>
        <AddTodo addTodo={actions.addTodo}/>
        <TodoList todo={todo} toggle={actions.toggleTodo} visibility={filter}/>
        <VisibilityFilter filter={actions.filterTodo}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

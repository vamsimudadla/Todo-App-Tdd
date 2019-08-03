import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoItem from "./TodoItem";
@observer
class TodoList extends Component {
  dispalyTodos = () => {
    const { todoStore } = this.props;
    const { filteredTodos } = todoStore;
    return filteredTodos.map(todo => (
      <TodoItem todo={todo} todoStore={todoStore} key={todo.id} />
    ));
  };
  render() {
    return <div>{this.dispalyTodos()}</div>;
  }
}

export default TodoList;

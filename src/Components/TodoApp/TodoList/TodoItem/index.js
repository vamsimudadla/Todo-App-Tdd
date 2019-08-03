import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import EditableTodo from "./EditableTodo";
import "./styles.css";
@observer
class TodoItem extends Component {
  @observable editTodo = false;
  removeTodo = () => {
    const del = window.confirm("Are You Sure???");
    if (del) {
      const { todoStore, todo } = this.props;
      todoStore.removeTodo(todo);
    }
  };

  handleChange = () => {
    const { todo } = this.props;
    todo.onToggleCompleted();
  };

  handleDoubleClick = () => {
    this.editTodo = true;
  };

  onPressEnterKey = todoDescription => {
    const { todo } = this.props;
    todo.updateTodo(todoDescription);
    this.editTodo = false;
  };
  render() {
    const { todo } = this.props;
    return (
      <div className="todoItem">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          data-testid="check"
          onChange={this.handleChange}
        />
        <EditableTodo
          editTodo={this.editTodo}
          description={todo.description}
          handleDoubleClick={this.handleDoubleClick}
          onPressEnterKey={this.onPressEnterKey}
        />
        <button onClick={this.removeTodo}>DELETE</button>
      </div>
    );
  }
}

export default TodoItem;

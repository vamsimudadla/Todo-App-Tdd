import React, { Component } from "react";
import EnterTodoBox from "./EnterTodoBox";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { observer } from "mobx-react";
@observer
class TodoApp extends Component {
  onPressEnterKey = todoDescription => {
    const { todoStore } = this.props;
    todoStore.addTodo(todoDescription);
  };

  setAppliedFilter = filterValue => {
    const { todoStore } = this.props;
    todoStore.setAppliedFilter(filterValue);
  };

  clearCompleted = () => {
    const { todoStore } = this.props;
    todoStore.clearCompleted();
  };

  remainingTodoItems = () => {
    const { todoStore } = this.props;
    return todoStore.remainingTodoItems;
  };
  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <EnterTodoBox onPressEnterKey={this.onPressEnterKey} />
        <TodoList todoStore={this.props.todoStore} />
        {todoStore.todos.length > 0 ? (
          <FilterButtons
            setAppliedFilter={this.setAppliedFilter}
            clearCompleted={this.clearCompleted}
            remainingTodoItems={this.remainingTodoItems()}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TodoApp;

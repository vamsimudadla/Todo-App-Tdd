import { observable, action, computed } from "mobx";
import TodoModel from "../TodoModel";
import { filters } from "../../Constants";
class TodoStore {
  @observable todos;
  @observable appliedFilter = filters.all;
  constructor() {
    this.todos = [];
  }

  @action.bound
  addTodo(todoDescription) {
    const todo = {
      id: Math.random(),
      description: todoDescription
    };
    const newTodo = new TodoModel(todo);
    this.todos.push(newTodo);
  }

  @action.bound
  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  @action.bound
  setAppliedFilter(filterValue) {
    this.appliedFilter = filterValue;
  }

  @action.bound
  clearCompleted() {
    this.todos = this.todos.filter(todo => todo.isCompleted === false);
  }

  @computed get filteredTodos() {
    if (this.appliedFilter === filters.all) return this.todos;
    else if (this.appliedFilter === filters.active)
      return this.todos.filter(todo => todo.isCompleted !== true);
    else if (this.appliedFilter === filters.completed)
      return this.todos.filter(todo => todo.isCompleted === true);
  }

  @computed get remainingTodoItems() {
    return this.todos.filter(todo => todo.isCompleted === false).length;
  }
}

export default TodoStore;

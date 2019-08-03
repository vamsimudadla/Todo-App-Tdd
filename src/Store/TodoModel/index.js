import { observable, action } from "mobx";

class TodoModel {
  id;
  @observable description;
  @observable isCompleted = false;

  constructor(todo) {
    const { id, description } = todo;
    this.id = id;
    this.description = description;
  }

  @action.bound
  onToggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  @action.bound
  updateTodo(todoDescription) {
    this.description = todoDescription;
  }
}

export default TodoModel;

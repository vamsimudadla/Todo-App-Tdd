import TodoStore from "./index";
import { filters } from "../../Constants";

describe("Shopping Store test cases", () => {
  let todoStore;
  beforeEach(() => {
    todoStore = new TodoStore();
    expect(todoStore.todos.length).toBe(0);
    todoStore.addTodo("ALL Filter");
    todoStore.addTodo("get Filtered Todos");
  });

  it("should add todo to list of todos when addTodo action is triggered", () => {
    todoStore.addTodo("Learn Tdd");
    expect(todoStore.todos.length).toBe(3);
  });

  it("should remove todo from list of todos when removeTodo action is triggered", () => {
    expect(todoStore.todos.length).toBe(2);
    const todo = todoStore.todos[0];
    todoStore.removeTodo(todo);
    expect(todoStore.todos.length).toBe(1);
  });

  it("should apply filter when setAppliedFilter is triggered", () => {
    todoStore.setAppliedFilter(filters.all);
    expect(todoStore.appliedFilter).toBe("ALL");
  });

  it("should return all todos when ALL filter is applied", () => {
    todoStore.setAppliedFilter(filters.all);
    expect(todoStore.filteredTodos.length).toBe(2);
  });

  it("should return active todos when ACTIVE filter is applied", () => {
    todoStore.todos[0].isCompleted = true;
    todoStore.setAppliedFilter(filters.active);
    expect(todoStore.filteredTodos.length).toBe(1);
  });

  it("should return active todos when ACTIVE filter is applied", () => {
    todoStore.addTodo("Learn Tdd");
    todoStore.todos[0].isCompleted = true;
    todoStore.todos[1].isCompleted = true;
    todoStore.setAppliedFilter(filters.completed);
    expect(todoStore.filteredTodos.length).toBe(2);
  });

  it("should remove completed todos from todos list when clearCompleted is triggerd", () => {
    todoStore.addTodo("Learn Tdd");
    todoStore.todos[0].isCompleted = true;
    todoStore.todos[1].isCompleted = true;
    todoStore.clearCompleted();
    expect(todoStore.todos.length).toBe(1);
  });

  it("should return remaining todo items length", () => {
    todoStore.addTodo("Learn Tdd");
    todoStore.todos[0].isCompleted = true;
    todoStore.todos[1].isCompleted = true;
    expect(todoStore.remainingTodoItems).toBe(1);
  });
});

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoItem from "./index";
import TodoStore from "../../../../Store/TodoStore";
import TodoModel from "../../../../Store/TodoModel";

afterEach(cleanup);
describe("TodoItem test cases", () => {
  it("should trigger removeTodo action when delete button is clicked", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("learnTdd");
    expect(todoStore.todos.length).toBe(1);
    jest.spyOn(todoStore, "removeTodo");
    window.confirm = jest.fn(() => true);
    const { getByText } = render(
      <TodoItem todoStore={todoStore} todo={todoStore.todos[0]} />
    );
    const deleteButton = getByText("DELETE");
    fireEvent.click(deleteButton);
    expect(window.confirm).toBeCalled();
    expect(todoStore.removeTodo).toBeCalled();
    expect(todoStore.todos.length).toBe(0);
  });

  it("should trigger onToggleCompleted action in TodoModel when onChange event occurs on checkBox", () => {
    const todo = {
      id: Math.random(),
      description: "Learn Tdd"
    };
    const newTodo = new TodoModel(todo);
    jest.spyOn(newTodo, "onToggleCompleted");
    const { getByTestId } = render(<TodoItem todo={newTodo} />);
    const checkBox = getByTestId("check");
    fireEvent.click(checkBox);
    expect(newTodo.onToggleCompleted).toBeCalled();
  });
});

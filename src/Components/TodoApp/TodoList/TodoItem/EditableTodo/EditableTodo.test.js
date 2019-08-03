import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoStore from "../../../../../Store/TodoStore";
import EditableTodo from "./index";
describe("EditableTodo test cases", () => {
  it("should call parent function present in TodoItem when doubleClick happens on text", () => {
    const handleDoubleClick = jest.fn();
    const { getByTestId } = render(
      <EditableTodo handleDoubleClick={handleDoubleClick} />
    );
    const todoStore = new TodoStore();
    todoStore.addTodo("testing");
    const textField = getByTestId("edit");
    fireEvent.doubleClick(textField);
    expect(handleDoubleClick).toBeCalled();
  });
});

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoApp from "./index";
import TodoStore from "../../Store/TodoStore";
import { filters } from "../../Constants";

let todoStore;
beforeEach(() => {
  todoStore = new TodoStore();
});

afterEach(cleanup);

describe("TodoApp test cases", () => {
  it("should trigger addTodo action when onkeydown event occurs", () => {
    jest.spyOn(todoStore, "addTodo");
    const { getByPlaceholderText } = render(<TodoApp todoStore={todoStore} />);
    const inputBox = getByPlaceholderText("What needs to be done?");
    const changeEvent = {
      target: {
        value: "Practice Tdd"
      }
    };
    fireEvent.change(inputBox, changeEvent);
    const keyDownEvent = {
      key: "Enter",
      code: 13,
      keyCode: 13
    };
    fireEvent.keyDown(inputBox, keyDownEvent);
    expect(todoStore.addTodo).toHaveBeenCalledWith("Practice Tdd");
  });

  it("should call todo store setAppliedFilter action whwn ALL button is cicked in FilterButtons", () => {
    jest.spyOn(todoStore, "setAppliedFilter");
    const { getByText } = render(<TodoApp todoStore={todoStore} />);
    todoStore.addTodo("learn Tdd");
    const allButton = getByText("ALL");
    fireEvent.click(allButton);
    expect(todoStore.setAppliedFilter).toHaveBeenCalledWith(filters.all);
  });
});

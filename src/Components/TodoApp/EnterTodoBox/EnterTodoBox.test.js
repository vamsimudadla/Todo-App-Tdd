import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import EnterTodoBox from "./index";

afterEach(cleanup);
describe("EnterTodoBox Test Cases", () => {
  it("should take a value and change the todo description when onchange event occurs", () => {
    const { getByPlaceholderText } = render(<EnterTodoBox />);
    const inputBox = getByPlaceholderText("What needs to be done?");
    const changeEvent = {
      target: {
        value: "Practice Tdd"
      }
    };
    fireEvent.change(inputBox, changeEvent);
  });

  it("should call a parent function with the value todo description when on key down event occurs", () => {
    const onPressEnterKey = jest.fn();
    const { getByPlaceholderText } = render(
      <EnterTodoBox onPressEnterKey={onPressEnterKey} />
    );
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
    expect(onPressEnterKey).toHaveBeenCalledWith("Practice Tdd");
  });
});

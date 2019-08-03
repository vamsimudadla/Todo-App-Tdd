import TodoModel from "./index";

describe("TodoModel Test cases", () => {
  it("should trigger onToggleCompleted and change the boolean value of isCompleted", () => {
    const newTodo = {
      id: Math.random(),
      description: "learm Tdd"
    };
    const todo = new TodoModel(newTodo);
    todo.onToggleCompleted();
    expect(todo.isCompleted).toBe(true);
  });
  it("should trigger updateTodo and change the value of todo description", () => {
    const newTodo = {
      id: Math.random(),
      description: "learm Tdd"
    };
    const todo = new TodoModel(newTodo);
    const description = "Live Fast For a moment";
    todo.updateTodo(description);
    expect(todo.description).toBe("Live Fast For a moment");
  });
});

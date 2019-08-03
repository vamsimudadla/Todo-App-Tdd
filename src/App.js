import React from "react";
import logo from "./logo.svg";
import { todoStore } from "./Store/store/index";
import TodoApp from "./Components/TodoApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoApp todoStore={todoStore} />
    </div>
  );
}

export default App;

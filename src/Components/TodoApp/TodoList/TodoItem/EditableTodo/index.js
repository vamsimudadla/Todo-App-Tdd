import React, { Component } from "react";
import EnterTodoBox from "../../../EnterTodoBox";
class EditableTodo extends Component {
  handleDoubleClick = () => {
    this.props.handleDoubleClick();
  };

  render() {
    const { editTodo, description } = this.props;
    return (
      <div>
        {editTodo ? (
          <EnterTodoBox
            onPressEnterKey={this.props.onPressEnterKey}
            todoDescription={description}
          />
        ) : (
          <span onDoubleClick={this.handleDoubleClick} data-testid="edit">
            {description}
          </span>
        )}
      </div>
    );
  }
}

export default EditableTodo;

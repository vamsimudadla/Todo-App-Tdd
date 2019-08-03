import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
@observer
class EnterTodoBox extends Component {
  static defaultProps = {
    todoDescription: ""
  };
  @observable todoDescription = this.props.todoDescription;
  @action.bound
  handleChange = e => {
    this.todoDescription = e.target.value;
  };

  onKeyDown = e => {
    const description = this.todoDescription.trim();
    if (e.keyCode === 13 && description.length > 0) {
      this.props.onPressEnterKey(this.todoDescription);
      this.todoDescription = "";
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.todoDescription}
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default EnterTodoBox;

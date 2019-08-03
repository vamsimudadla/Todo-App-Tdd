import React from "react";
import { filters } from "../../../Constants";
import { observer } from "mobx-react";
import "./styles.css";
@observer
class FilterButtons extends React.Component {
  applyAllFilter = () => {
    const { setAppliedFilter } = this.props;
    setAppliedFilter(filters.all);
  };

  applyActiveFilter = () => {
    const { setAppliedFilter } = this.props;
    setAppliedFilter(filters.active);
  };

  applyCompletedFilter = () => {
    const { setAppliedFilter } = this.props;
    setAppliedFilter(filters.completed);
  };

  clearCompleted = () => {
    const { clearCompleted } = this.props;
    clearCompleted();
  };

  render() {
    return (
      <div>
        <span>{this.props.remainingTodoItems}</span>
        <button onClick={this.applyAllFilter}>ALL</button>
        <button onClick={this.applyActiveFilter}>ACTIVE</button>
        <button onClick={this.applyCompletedFilter}>COMPLETED</button>
        <span onClick={this.clearCompleted} className="clearCompleted">
          clearCompleted
        </span>
      </div>
    );
  }
}

export default FilterButtons;

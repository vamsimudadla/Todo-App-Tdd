import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { filters } from "../../../Constants";
import FilterButtons from "./index";

afterEach(cleanup);
describe("FilterButtons test cases", () => {
  it("should call parent function with applied filter ALL when ALL Button is clicked", () => {
    const setAppliedFilter = jest.fn();
    const { getByText } = render(
      <FilterButtons setAppliedFilter={setAppliedFilter} />
    );
    const allButton = getByText("ALL");
    fireEvent.click(allButton);
    expect(setAppliedFilter).toBeCalledWith(filters.all);
  });

  it("should call parent function with applied filter ACTIVE when ACTIVE Button is clicked", () => {
    const setAppliedFilter = jest.fn();
    const { getByText } = render(
      <FilterButtons setAppliedFilter={setAppliedFilter} />
    );
    const allButton = getByText("ACTIVE");
    fireEvent.click(allButton);
    expect(setAppliedFilter).toBeCalledWith(filters.active);
  });

  it("should call parent function with applied filter COMPLETED when COMPLETED Button is clicked", () => {
    const setAppliedFilter = jest.fn();
    const { getByText } = render(
      <FilterButtons setAppliedFilter={setAppliedFilter} />
    );
    const allButton = getByText("COMPLETED");
    fireEvent.click(allButton);
    expect(setAppliedFilter).toBeCalledWith(filters.completed);
  });

  it("should call parent function when clearCompleted is clicked", () => {
    const clearCompleted = jest.fn();
    const { getByText } = render(
      <FilterButtons clearCompleted={clearCompleted} />
    );
    const allButton = getByText("clearCompleted");
    fireEvent.click(allButton);
    expect(clearCompleted).toBeCalled();
  });
});

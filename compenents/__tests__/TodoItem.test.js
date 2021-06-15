import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TodoItem from "../TodoItem";

describe("Todo Item", () => {
  const defaultProps = {
    completed: false,
    todo: "Buy eggs",
    handleChange: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders", () => {
    const { getByTestId } = render(<TodoItem {...defaultProps} />);
    getByTestId("checkbox");
    getByTestId("not-completed");
    getByTestId("todo");
  });

  it("has the right data for not completed", () => {
    const { getByTestId, getByText } = render(<TodoItem {...defaultProps} />);
    getByTestId("not-completed");
    getByTestId("todo");
    getByText("Buy eggs");
  });

  it("has the right data for completed", () => {
    const { getByTestId, getByText } = render(
      <TodoItem {...defaultProps} completed />
    );
    getByTestId("completed");
    getByTestId("todo");
    getByText("Buy eggs");
  });

  it("check not completed to completed flow", () => {
    const { getByTestId, debug, queryByTestId, rerender } = render(
      <TodoItem {...defaultProps} />
    );

    expect(getByTestId("not-completed")).toBeDefined();

    fireEvent.press(getByTestId("checkbox"));
    expect(defaultProps.handleChange).toBeCalledTimes(1);
    rerender(<TodoItem {...defaultProps} completed={true} />);

    expect(getByTestId("completed")).toBeDefined;
    expect(queryByTestId("not-completed")).toBeNull();
  });

  it("check completed to not completed flow", () => {
    const { getByTestId, debug, queryByTestId, rerender } = render(
      <TodoItem {...defaultProps} completed />
    );

    expect(getByTestId("completed")).toBeDefined();

    fireEvent.press(getByTestId("checkbox"));
    expect(defaultProps.handleChange).toBeCalledTimes(1);
    rerender(<TodoItem {...defaultProps} completed={false} />);

    expect(getByTestId("not-completed")).toBeDefined;
    expect(queryByTestId("completed")).toBeNull();
  });
});

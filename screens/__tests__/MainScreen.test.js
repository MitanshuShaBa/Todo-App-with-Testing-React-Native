import React from "react";
import MainScreen from "../MainScreen";
import { render, fireEvent } from "@testing-library/react-native";

describe("MainScreen", () => {
  it("renders", () => {
    const { getByText, getByTestId } = render(<MainScreen />);
    getByText("Buy bread");
    getByTestId("completed");
  });

  it("toggles the completed", () => {
    const { getByTestId, queryByTestId } = render(<MainScreen />);

    expect(queryByTestId("completed")).toBeDefined();
    fireEvent.press(getByTestId("checkbox"));
    expect(queryByTestId("completed")).toBeNull();
    expect(queryByTestId("not-completed")).toBeDefined();
  });
});

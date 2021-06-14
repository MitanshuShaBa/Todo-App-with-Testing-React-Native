import React from "react";
import MainScreen from "../MainScreen";
import { render } from "@testing-library/react-native";

describe("MainScreen", () => {
  it("renders", () => {
    render(<MainScreen />);
  });
});

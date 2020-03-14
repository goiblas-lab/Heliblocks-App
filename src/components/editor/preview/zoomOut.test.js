import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ZoomOut from "./zoomOut";
import { ThemeProvider } from "@chakra-ui/core";

describe("ZoomOut", () => {
  test("Should be able zoom", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ZoomOut></ZoomOut>
      </ThemeProvider>
    );
    const container = getByTestId("container-zoom");
    const button100 = getByTestId("button-zoom-100");
    const button50 = getByTestId("button-zoom-50");
    const button25 = getByTestId("button-zoom-25");

    expect(container).toHaveStyle("width: 100%");
    expect(container).toHaveStyle("height: 100%");
    expect(container).toHaveStyle("transform: scale(1)");

    fireEvent.click(button50);
    expect(container).toHaveStyle("width: 200%");
    expect(container).toHaveStyle("height: 200%");
    expect(container).toHaveStyle("transform: scale(0.5)");

    fireEvent.click(button25);
    expect(container).toHaveStyle("width: 400%");
    expect(container).toHaveStyle("height: 400%");
    expect(container).toHaveStyle("transform: scale(0.25)");

    fireEvent.click(button100);
    expect(container).toHaveStyle("width: 100%");
    expect(container).toHaveStyle("height: 100%");
    expect(container).toHaveStyle("transform: scale(1)");
  });
});

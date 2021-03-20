import React from "react";
import ProfileStatus from "./ProfileStatus";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("status from props should be in the state", () => {
  act(() => {
    render(<ProfileStatus status="test" />, container);
  });
  expect(container.textContent).toBe("test");
});

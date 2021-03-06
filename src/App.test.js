import MainApp from "./App";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

test("renders without crashing", () => {
  act(() => {
    ReactDOM.render(<MainApp />, container);
  });
  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
});

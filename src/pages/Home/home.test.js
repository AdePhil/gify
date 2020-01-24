import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import reducer from "../../reducers/index";
import Home from "./index";
// import axios from "axios";
// jest.mock("axios");

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with
function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}
function mockCall() {
  jest.fn().mockResolvedValueOnce({
    data: {
      gifs: [
        {
          type: "gif",
          id: "2wSe48eAUC15p38UqO",
          url: "https://giphy.com/gifs/2wSe48eAUC15p38UqO",
          slug: "2wSe48eAUC15p38UqO",
          username: "apex",
          source: "",
          title: "Animated GIF 1",
          rating: "g",
          images: { downsized_large: { height: "311", size: "967992" } }
        },
        {
          type: "gif",
          id: "2wSe48eAUC15p38UqO",
          url: "https://giphy.com/gifs/2wSe48eAUC15p38UqO",
          slug: "2wSe48eAUC15p38UqO",
          username: "max",
          source: "",
          title: "Animated GIF 2",
          rating: "g",
          images: { downsized_large: { height: "311", size: "967992" } }
        }
      ]
    }
  });
}

test("Input renders correctly", () => {
  const { queryByTestId } = renderWithRedux(<Home />);
  expect(queryByTestId("search-input")).toBeTruthy();
});

describe("Input value", () => {
  test("update on change", () => {
    const { queryByTestId } = renderWithRedux(<Home />);
    const searchInput = queryByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});

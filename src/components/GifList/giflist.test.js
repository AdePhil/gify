import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import reducer from "../../reducers/index";
import GifList from "./GifList";
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

const gifs = [
  {
    type: "gif",
    id: "2wSe48eAUC15p38UqO",
    url: "https://giphy.com/gifs/2wSe48eAUC15p38UqO",
    slug: "2wSe48eAUC15p38UqO",
    username: "apex",
    source: "",
    title: "Animated GIF 1",
    rating: "g",
    images: {
      downsized_medium: {
        height: "220",
        size: "807719",
        url:
          "https://media0.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif?cid=35b9b21698ebb2f4102e77724e70402e83c4dc339443d904&rid=giphy.gif",
        width: "410"
      }
    }
  },
  {
    type: "gif",
    id: "2wSe48eAUC15p38UqOyh",
    url: "https://giphy.com/gifs/2wSe48eAUC15p38UqO",
    slug: "2wSe48eAUC15p38UqO",
    username: "max",
    source: "",
    title: "Animated GIF 2",
    rating: "pg-13",
    images: {
      downsized_medium: {
        height: "220",
        size: "807719",
        url:
          "https://media0.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif?cid=35b9b21698ebb2f4102e77724e70402e83c4dc339443d904&rid=giphy.gif",
        width: "410"
      }
    }
  }
];
describe("Gif List", () => {
  it("has titles", async () => {
    const { getAllByTestId } = renderWithRedux(
      <MemoryRouter>
        <GifList gifs={gifs} />
      </MemoryRouter>
    );
    const titles = getAllByTestId("gif-title").map(row => row.textContent);
    expect(titles).toEqual(["Animated GIF 1", "Animated GIF 2"]);
  });
  it("has ratings", async () => {
    const { getAllByTestId } = renderWithRedux(
      <MemoryRouter>
        <GifList gifs={gifs} />
      </MemoryRouter>
    );
    const ratings = getAllByTestId("gif-rating").map(row => row.textContent);
    expect(ratings).toEqual(["g", "pg-13"]);
  });
});

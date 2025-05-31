import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_DATA from "../MockData/resList.json";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_DATA);
    },
  });
});
describe("body componet test cases", () => {
  it("should Search rescard with input text burger", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("SearchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(4);
  });
  it("should filter Top rated Restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const topBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topBtn);
    // const cards = screen.getAllByTestId("resCard");
    // expect(cards.length).toBe(4);
  });
});

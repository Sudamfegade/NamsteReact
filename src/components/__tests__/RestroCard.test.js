import { render, screen } from "@testing-library/react";
import RestroCart, { withLablePromoted } from "../RestroCard";
import MOCk_DATA from "../MockData/RestrocardMockData.json";
import "@testing-library/jest-dom";
describe("test restCard component", () => {
  it("should render rest card with props", () => {
    render(<RestroCart resData={MOCk_DATA} />);
    const ItemCardName = screen.getByText("McDonald's");

    expect(ItemCardName).toBeInTheDocument;
  });

  // it("should render with lable rest card with props", () => {
  //   render(<withLablePromoted resData={MOCk_DATA} />);
  // });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import RestMenu from "../RestaurantMenu";
import MOCK_DATA from "../MockData/resmenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import Cart from "../Cart";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
describe("test rest menu card", () => {
  it("should load Rest Menu componet", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestMenu />
            {/* <Cart /> */}
          </Provider>
        </BrowserRouter>
      );
    });
    const acc = screen.getByText("Recommended(20)");
    fireEvent.click(acc);

    const itemls = screen.getAllByTestId("itemls");

    const addBtn = screen.getAllByRole("button", { name: "Add+" });
    fireEvent.click(addBtn[1]);
    const carditmes = screen.getByText("Cart - (1 Items)");
    expect(carditmes).toBeInTheDocument;
    // const clearBtn = ;
    // fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  });
  // it("Should clear", async () => {
  //   await act(async () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <Header />
  //           <RestMenu />
  //           <Cart />
  //         </Provider>
  //       </BrowserRouter>
  //     );
  //   });
  //   const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  //   fireEvent.click(clearBtn);

  //   expect(screen.getByText("Please add items in cart")).toBeInTheDocument;
  // });
});

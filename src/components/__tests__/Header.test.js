import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

describe("test cases foe header", () => {
  it("Should render the header component with login", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Login" });

    expect(button).toBeInTheDocument();
  });
  it("Should render the header component with cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const ItemCards = screen.getByText("Cart - (0 Items)");

    expect(ItemCards).toBeInTheDocument();
  });
  it("Should render the header component with cart and in regex", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const ItemCards = screen.getByText(/Cart/);

    expect(ItemCards).toBeInTheDocument();
  });

  it("Should change login button to logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const LoginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(LoginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});

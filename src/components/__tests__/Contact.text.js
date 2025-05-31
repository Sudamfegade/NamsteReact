import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact";
import "@testing-library/jest-dom";

test("Should render contact us component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should render button contact us component", () => {
  render(<ContactUs />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should render Input box contact us component", () => {
  render(<ContactUs />);

  const InputName = screen.getByPlaceholderText("name");

  expect(InputName).toBeInTheDocument();
});

test("should calculate input boxes rendered", () => {
  render(<ContactUs />);

  const inputbox = screen.getAllByRole("textbox");

  expect(inputbox.length).toBe(2);
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ShoppingCart } from "../ShoppingCart";

describe("ShoppingCart", () => {
  it("will show the title", () => {
    const {getByText} = render(<ShoppingCart />);
    const titleText = "Shopping cart";

    getByText(titleText);
  })

  it("renders the list of created items", ()=>{
    const {getByTestId} = render(<ShoppingCart />);

    getByTestId("shopping-list")
  })

  it("will render the input", ()=>{
    const {getByPlaceholderText} = render(<ShoppingCart />);

    getByPlaceholderText("Write description here...")
  })

  it("is possible to add new item", ()=>{
    const {getByPlaceholderText, getByRole, getByText} = render(<ShoppingCart />);

    const input = getByPlaceholderText("Write description here...");
    fireEvent.change(input, { target:{value: "123"}})

    const button = getByRole("button");
    fireEvent.click(button)

    getByText("123");
  })

  it("is NOT possible to add an item with no description", ()=>{
    const {getByPlaceholderText, getByRole, queryAllByTestId} = render(<ShoppingCart />);

    const input = getByPlaceholderText("Write description here...");
    fireEvent.change(input, { target: {value: ""}})

    const button = getByRole("button");
    fireEvent.click(button)

    expect(queryAllByTestId("shopping-item")).toHaveLength(0)
  })
});
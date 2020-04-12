import React from "react";
import { ShoppingList } from "../ShoppingList";
import { render } from "@testing-library/react";

describe("ShoppingList", ()=>{
  it("renders the list of created items", ()=>{
    const items = ["item 1", "item 2"];
    const {getByText} = render(<ShoppingList items={items}/>);

    items.forEach(item => {
      getByText(item);
    })
  })
})
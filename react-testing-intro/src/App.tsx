import React from "react";
import Todo from "./components/Todo/Todo";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

const AppStyle = {
  container: {
    margin: "24px"
  }
};

const App: React.FC = () => {

  return (
    <div style={AppStyle.container}>
      <ShoppingCart />
    </div>
  );
};

export default App;

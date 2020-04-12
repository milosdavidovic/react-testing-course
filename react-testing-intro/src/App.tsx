import React from "react";
import Todo from "./components/Todo/Todo";

const AppStyle = {
  container: {
    margin: "24px"
  }
};

const App: React.FC = () => {

  return (
    <div style={AppStyle.container}>
      <Todo />
    </div>
  );
};

export default App;

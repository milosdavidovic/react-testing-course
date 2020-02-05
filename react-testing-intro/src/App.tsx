import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";

const AppStyle = {
  container: {
    margin: "24px"
  }
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks(t => [...t, task]);
  };

  return (
    <div style={AppStyle.container}>
      <Header />
      <TaskInput addTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

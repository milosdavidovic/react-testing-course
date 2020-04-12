import React, { useState } from "react"
import Header from "./Header/Header";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks(t => [...t, task]);
  };

  return (
    <>
      <Header />
      <TaskInput addTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default Todo;
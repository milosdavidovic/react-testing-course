import React from "react";

interface Props {
  tasks: string[];
}

export const TaskListTestIds = {
  container: "task-list",
  task: "task-item"
};

const TaskListStyle = {
  taskWrapper: {}
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul data-testid={TaskListTestIds.container}>
      {tasks.map(task => (
        <li
          key={task}
          style={TaskListStyle.taskWrapper}
          data-testid={TaskListTestIds.task}
        >
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

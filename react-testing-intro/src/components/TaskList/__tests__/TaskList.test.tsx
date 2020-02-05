import React from "react";
import { render } from "@testing-library/react";
import TaskList from "../TaskList";

describe("TaskList", () => {
  const testTasks = ["test-task-1", "test-task-2"];
  it("will render all the tasks", () => {
    const { getByText } = render(<TaskList tasks={testTasks} />);

    getByText(testTasks[0]);
    getByText(testTasks[1]);
  });
});

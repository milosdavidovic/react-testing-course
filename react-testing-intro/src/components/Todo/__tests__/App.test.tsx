import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TaskListTestIds } from "../TaskList/TaskList";
import Todo from "../Todo";

describe("App", () => {
  it("renders the title", () => {
    const { getByText } = render(<Todo />);

    const header = getByText(/todo app/i);
    expect(header).toBeInTheDocument();
  });

  it("renders the input form", () => {
    const { getByLabelText, getByText } = render(<Todo />);

    const input = getByLabelText("task input");
    expect(input).toBeInTheDocument();
    const addButton = getByText(/add/i);
    expect(addButton).toBeInTheDocument();
  });

  it("renders the task list", () => {
    const { getByTestId } = render(<Todo />);

    getByTestId(TaskListTestIds.container);
  });

  it("is possible to add new task", () => {
    const { getByLabelText, getByText, queryAllByTestId } = render(<Todo />);
    const testTask = "task1";

    const input = getByLabelText("task input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: testTask } });
    const addButton = getByText(/add/i);
    fireEvent.click(addButton);

    getByText(testTask);
    expect(queryAllByTestId(TaskListTestIds.task)).toHaveLength(1);
    expect(input.value).toBe("");
  });

  it("won't add new task if the input is empty", () => {
    const { getByLabelText, getByText, queryAllByTestId } = render(<Todo />);

    const input = getByLabelText("task input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    const addButton = getByText(/add/i);
    fireEvent.click(addButton);

    expect(queryAllByTestId(TaskListTestIds.task)).toHaveLength(0);
  });
});

import React, { useState } from "react";

interface Props {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<Props> = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleAddClick = () => {
    if (!value) {
      return;
    }
    addTask(value);
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ display: "flex", width: "300px" }}>
      <input
        type="text"
        aria-label="task input"
        value={value}
        onChange={handleChange}
      ></input>
      <button type="button" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;

import { useState } from "react";

export default function NewTaskForm({ createTask }) {
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="New task"
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <div
        className={`task-button ${newTaskName == "" && "task-button-disabled"}`}
        onClick={() => {
          createTask(newTaskName);
          setNewTaskName("");
        }}
      >
        Add new task
      </div>
    </>
  );
}

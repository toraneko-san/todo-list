import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), name: "Todo Task", isDone: false },
    { id: crypto.randomUUID(), name: "Done Task", isDone: true },
  ]);

  function addTask() {
    const newTaskName = prompt("New task: ");

    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), name: newTaskName, isDone: false },
    ]);
  }

  function updateTaskState(id) {
    const newTasks = tasks.map((task) =>
      id === task.id ? { ...task, isDone: !task.isDone } : task
    );

    setTasks(newTasks);
  }

  function updateTaskName(id) {
    const updatedTaskName = prompt("Change task name to: ");
    const newTasks = tasks.map((task) =>
      id === task.id ? { ...task, name: updatedTaskName } : task
    );

    setTasks(newTasks);
  }

  return (
    <div className="task-container">
      <div className="task-button" onClick={addTask}>
        Add new task
      </div>
      <h1>Todo List</h1>
      <div className="task-button-container">
        <div className="task-button">All</div>
        <div className="task-button">Todo</div>
        <div className="task-button">Done</div>
      </div>
      <ul className="task-list">
        {tasks.map(({ id, name, isDone }) => (
          <li key={id} className={`task-item ${isDone && "task-done"}`}>
            {name}
            <div>
              <ion-icon
                class={isDone && "icon-done"}
                name={isDone ? "checkbox-outline" : "square-outline"}
                onClick={() => updateTaskState(id)}
              />
              <ion-icon
                class="icon-update"
                name="pencil"
                onClick={() => updateTaskName(id)}
              />
              <ion-icon class="icon-delete" name="trash" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

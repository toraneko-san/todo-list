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

  function changeTaskState(id) {
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
      <ul className="task-list">
        {tasks.map(({ id, name, isDone }) => {
          return (
            <li key={id} className={`task-item ${isDone && "task-done"}`}>
              {name}
              <div>
                {isDone ? (
                  <ion-icon
                    class="icon-done"
                    name="checkbox-outline"
                    onClick={() => changeTaskState(id)}
                  />
                ) : (
                  <ion-icon
                    name="square-outline"
                    onClick={() => changeTaskState(id)}
                  />
                )}
                <ion-icon
                  class="icon-update"
                  name="pencil"
                  onClick={() => updateTaskName(id)}
                />
                <ion-icon class="icon-delete" name="trash" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

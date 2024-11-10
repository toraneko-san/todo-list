import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), name: "Todo Task", isDone: false },
    { id: crypto.randomUUID(), name: "Done Task", isDone: true },
  ]);
  const [category, setCategory] = useState("all");

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

  function deleteTasks(type, deleteId = null) {
    const newTaskList = tasks.filter(({ id, isDone }) => {
      switch (type) {
        case "done":
          return !isDone;
        case "single":
          return id !== deleteId;
        default:
          return false;
      }
    });

    setTasks(newTaskList);
  }

  const visibleTasks = tasks.filter(({ isDone }) => {
    switch (category) {
      case "todo":
        return !isDone;
      case "done":
        return isDone;
      default:
        return true;
    }
  });

  return (
    <div className="task-container">
      <div className="task-button" onClick={addTask}>
        Add new task
      </div>
      <h1>Todo List</h1>
      <div className="task-button-container">
        <div className="task-button" onClick={() => setCategory("all")}>
          All
        </div>
        <div className="task-button" onClick={() => setCategory("todo")}>
          Todo
        </div>
        <div className="task-button" onClick={() => setCategory("done")}>
          Done
        </div>
      </div>
      <ul className="task-list">
        {visibleTasks.map(({ id, name, isDone }) => (
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
              <ion-icon
                class="icon-delete"
                name="trash"
                onClick={() => deleteTasks("single", id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="task-button-container">
        <div
          className="task-button task-button-red"
          onClick={() => deleteTasks("done")}
        >
          Delete done tasks
        </div>
        <div
          className="task-button task-button-red"
          onClick={() => deleteTasks()}
        >
          Delete all tasks
        </div>
      </div>
    </div>
  );
}

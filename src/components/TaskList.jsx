import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), name: "Todo Task", isDone: false },
    { id: crypto.randomUUID(), name: "Done Task", isDone: true },
  ]);

  return (
    <div className="task-container">
      <ul className="task-list">
        {tasks.map(({ id, name, isDone }) => {
          return (
            <li key={id} className={`task-item ${isDone && "task-done"}`}>
              {name}
              <div>
                {isDone ? (
                  <ion-icon class="icon-done" name="checkbox-outline" />
                ) : (
                  <ion-icon name="square-outline" />
                )}
                <ion-icon class="icon-update" name="pencil" />
                <ion-icon class="icon-delete" name="trash" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

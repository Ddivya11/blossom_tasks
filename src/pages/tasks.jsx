import { useState, useEffect } from "react";

function Tasks() {
  const [taskName, setTaskName] = useState("");

  const [priority, setPriority] = useState("Low");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("blossomTasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "blossomTasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setPriority("Low");
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const activeTasks = tasks.filter(
    (task) => !task.completed
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="page-card">

      <h1>🌷 Your Tasks</h1>

      <div className="task-form">

        <input
          type="text"
          placeholder="Enter a task..."
          value={taskName}
          onChange={(e) =>
            setTaskName(e.target.value)
          }
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          className="main-btn"
          onClick={addTask}
        >
          Add Task
        </button>

      </div>

      <div className="tasks-section">

        <h2>🌷 Active Tasks</h2>

        {activeTasks.length === 0 ? (
          <p>No active tasks yet.</p>
        ) : (
          activeTasks.map((task) => (
            <div
              key={task.id}
              className="task-card"
            >
              <div>

                <h3>
                  🌷 {task.name}
                </h3>

                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

              </div>

              <div className="task-buttons">

                <button
                  className="complete-btn"
                  onClick={() =>
                    completeTask(task.id)
                  }
                >
                  Complete
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task.id)
                  }
                >
                  Delete
                </button>

              </div>
            </div>
          ))
        )}

        <h2 className="completed-title">
          🌸 Completed Tasks
        </h2>

        {completedTasks.length === 0 ? (
          <p>No completed tasks yet.</p>
        ) : (
          completedTasks.map((task) => (
            <div
              key={task.id}
              className="task-card completed-card"
            >
              <h3>
                🌸 {task.name}
              </h3>

              <span
                className={`priority ${task.priority.toLowerCase()}`}
              >
                {task.priority}
              </span>
            </div>
          ))
        )}

      </div>

      <footer>
        🌷 Made by Divya 🌸
      </footer>

    </div>
  );
}

export default Tasks;
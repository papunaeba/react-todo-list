import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["eat", "sleep", "code"]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((element, index2) => index2 !== index);
    setTasks(newTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index - 1]] = [
        newTasks[index - 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do List</h1>
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={handleAddTask}
          />
          <button className="add-button" onClick={addTask}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Add Task</span>
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={task.id}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Up 👆
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Down 👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;

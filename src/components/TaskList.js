// src/components/TaskList.js
import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  const currentDate = new Date();

  return (
    <ul>
      {tasks.map((task, index) => {
        const taskDate = new Date(task.date + "T" + task.time);
        const taskStatus = taskDate > currentDate ? "Upcoming" : "Previous";

        return (
          <li key={index}>
            <span>{task.task}</span>
            <span>{task.date}</span>
            <span>{task.time}</span>
            <span>{taskStatus}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;

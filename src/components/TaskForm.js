// src/components/TaskForm.js
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      task,
      date,
      time,
    };
    addTask(newTask);
    setTask("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={handleTaskChange}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={handleDateChange}
      />
      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={handleTimeChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

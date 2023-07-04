// src/components/Alarm.js
import React, { useEffect } from "react";

const Alarm = ({ task }) => {
  useEffect(() => {
    const currentDate = new Date();
    const taskDate = new Date(task.date + "T" + task.time);

    if (taskDate > currentDate) {
      const timeDifference = taskDate.getTime() - currentDate.getTime();
      setTimeout(() => {
        const audio = new Audio("/K44XEWK-alarm-fire-alarm-buzzer-01.mp3");
        audio.play();
        alert(`Task: ${task.task}\nDate: ${task.date}\nTime: ${task.time}`);
      }, timeDifference);
    }
  }, [task]);

  return null;
};

export default Alarm;

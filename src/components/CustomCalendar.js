import React, { useState } from "react";
import Calendar from "react-calendar";
import Swal from "sweetalert2";
import "react-calendar/dist/Calendar.css";

export default function CustomCalendar() {
  const [value, setValue] = useState(new Date());
  const [deadlines, setDeadlines] = useState({
    "2024-12-18": ["Project Deadline"],
    "2024-12-20": ["Submit Report", "Team Meeting"],
  });

  const handleDayClick = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (deadlines[formattedDate]) {
      Swal.fire({
        title: "Deadlines",
        html: `<ul>${deadlines[formattedDate]
          .map((deadline) => `<li>${deadline}</li>`)
          .join("")}</ul>`,
        icon: "info",
        confirmButtonText: "Close",
      });
    } else {
      Swal.fire({
        title: "No Deadlines",
        text: "There are no deadlines for this date.",
        icon: "warning",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        value={value}
        onChange={setValue}
        tileContent={({ date }) => {
          const formattedDate = date.toISOString().split("T")[0];
          return deadlines[formattedDate] ? <div className="dot"></div> : null;
        }}
        onClickDay={handleDayClick}
      />

      <style>
        {`
          .dot {
            height: 5px;
            width: 5px;
            background-color: lightgreen;
            border-radius: 50%;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}

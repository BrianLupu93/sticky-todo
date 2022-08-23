import React from "react";
import { useState } from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";

const StickiesBoard = ({ stickies }) => {
  const [months, setMonths] = useState([
    { name: "January", number: "01", used: false },
    { name: "February", number: "02", used: false },
    { name: "March", number: "03", used: false },
    { name: "April", number: "04", used: false },
    { name: "May", number: "05", used: false },
    { name: "June", number: "06", used: false },
    { name: "July", number: "07", used: false },
    { name: "August", number: "08", used: false },
    { name: "September", number: "09", used: false },
    { name: "October", number: "10", used: false },
    { name: "November", number: "11", used: false },
    { name: "December", number: "12", used: false },
  ]);

  return (
    <div className="stikies-board">
      {stickies.map((sticky, i) => {
        return (
          <Stiky
            key={i}
            title={sticky.title}
            body={sticky.body}
            date={`${sticky.day}/${sticky.month}/${sticky.year}`}
          />
        );
      })}
    </div>
  );
};

export default StickiesBoard;

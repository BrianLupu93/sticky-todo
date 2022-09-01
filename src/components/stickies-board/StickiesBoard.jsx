import React from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";

const StickiesBoard = ({ stickies }) => {
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

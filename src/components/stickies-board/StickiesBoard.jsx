import React from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";

const StickiesBoard = ({ stickies, months }) => {
  return (
    <div className="stikies-board">
      {months.map((monthItem, i) => {
        if (monthItem.used) {
          return (
            <div key={i}>
              <h1 className="month-title">{monthItem.name}</h1>
              <div className="month-container" key={i}>
                {stickies.map((sticky, i) => {
                  if (sticky.month === monthItem.number) {
                    return (
                      <Stiky
                        key={i}
                        title={sticky.title}
                        body={sticky.body}
                        date={`${sticky.day}/${sticky.month}/${sticky.year}`}
                      />
                    );
                  }
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default StickiesBoard;

import React from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";

const StickiesBoard = ({ stickies }) => {
  const makeSticky = (obj) => {
    const dataArr = [];

    let day, month, year, title, body, date;

    const objYear = Object.entries(obj);

    objYear.map(([key, value]) => {
      year = key;
      const objMonth = Object.entries(value);

      objMonth.map(([key, value]) => {
        month = key;
        const dayObj = Object.entries(value);

        dayObj.map(([key, value]) => {
          day = key;

          value.map((item) => {
            title = item.title;
            body = item.body;
            date = `${day}/${month}/${year}`;

            return dataArr.push({ title: title, body: body, date: date });
          });
        });
      });
    });
    console.log(dataArr);
    return dataArr;
  };

  return (
    <div className="stikies-board">
      <div>
        <h1 className="month-title"></h1>
        <div className="month-container">
          {stickies &&
            makeSticky(stickies).map((item) => {
              return (
                <Stiky title={item.title} body={item.body} date={item.date} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default StickiesBoard;

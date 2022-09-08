import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";

const StickiesBoard = ({ stickies }) => {
  // ----------------- LOCAL STATE ----------------------------------
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

  // ----------------- FUNCTIONS ----------------------------------

  // Return the stickies array
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
            const sticky = {
              title: item.title,
              body: item.body,
              date: `${day}/${month}/${year}`,
            };

            return dataArr.push(sticky);
          });
        });
      });
    });

    return dataArr;
  };

  // Set months.used true if there is at least one stiky per month

  const checkMonths = (arr) => {
    const newMonths = [];
    months.forEach((monthItem) => {
      const monthNum = monthItem.number;

      const hasNumber = arr.some(
        (sticky) => sticky.date[3] + sticky.date[4] === monthNum
      );

      if (hasNumber && !monthItem.used) {
        monthItem = { ...monthItem, used: !monthItem.used };
      }

      newMonths.push(monthItem);
    });

    return setMonths(newMonths);
  };

  // ----------------- SIDE EFFECTS ----------------------------------

  useEffect(() => {
    if (stickies) {
      checkMonths(makeSticky(stickies));
    }
  }, [stickies]);

  return (
    <div className="stikies-board">
      <div>
        {months
          .filter((monthItem) => {
            return monthItem.used === true;
          })
          .map((month, i) => {
            return (
              <div key={i}>
                <h2 className="month-title">{month.name}</h2>
                <div className="month-container">
                  {makeSticky(stickies)
                    .filter((sticky) => {
                      return sticky.date[3] + sticky.date[4] === month.number;
                    })
                    .map((sticky, i) => {
                      return (
                        <Stiky
                          key={i}
                          title={sticky.title}
                          body={sticky.body}
                          date={sticky.date}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StickiesBoard;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

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

  const navigate = useNavigate();

  // ----------------- FUNCTIONS ----------------------------------

  // Bunttons Slide

  const buttonRight = document.getElementById("slideRight");
  const buttonLeft = document.getElementById("slideLeft");

  const next = () => {
    document.querySelector(".month-container").scrollLeft += 1410;
  };
  const prev = () => {
    document.querySelector(".month-container").scrollLeft -= 1410;
  };

  // Return the stickies array
  const makeSticky = (obj) => {
    const dataArr = [];
    let day, month, year, title, body, date, id;

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
              id: item.id,
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
      <div className="to-sticky-btn">
        <button className="create-sticky" onClick={() => navigate("/")}>
          back to Create Sticky
        </button>
      </div>

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
                          id={sticky.id}
                        />
                      );
                    })}
                </div>
                <div className="scroll-btns-container">
                  <button id="slideLeft" onClick={() => prev()}>
                    <FaAngleLeft />
                  </button>
                  <button id="slideRight" onClick={() => next()}>
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StickiesBoard;

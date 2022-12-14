import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Modal from "../modal/Modal";

const StickiesBoard = ({ stickies, setStickies }) => {
  // ----------------- LOCAL STATE ----------------------------------
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [stickyToDelete, setStickyToDelete] = useState();
  const [yearSticky, setYearSticky] = useState();
  const [selectedYearBtn, setSelectedYearBtn] = useState();

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

  const next = (i) => {
    const monthScroll = document.getElementById(`id-${i}`);
    monthScroll.scrollLeft += 1410;
  };
  const prev = (i) => {
    const monthScroll = document.getElementById(`id-${i}`);
    monthScroll.scrollLeft -= 1410;
  };

  // Return the stickies array
  const makeSticky = (obj) => {
    const dataArr = [];
    let day, month, year;

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

    return dataArr.sort(
      (a, b) => a.date.substring(0, 2) - b.date.substring(0, 2)
    );
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
    setSelectedYearBtn(true);
  }, [stickies]);

  useEffect(() => {
    let firstKey;

    if (
      stickies !== undefined &&
      stickies !== null &&
      Object.keys(stickies).length !== 0
    ) {
      firstKey = Object.keys(stickies)[0];
      const newItem = {
        [firstKey]: stickies[firstKey],
      };

      setYearSticky(newItem);
    }
  }, [stickies]);

  useEffect(() => {
    if (
      yearSticky !== null &&
      yearSticky !== undefined &&
      Object.keys(yearSticky).length !== 0
    ) {
      checkMonths(makeSticky(yearSticky));
    }
  }, [yearSticky]);

  // ----------------- FUNCTIONS ----------------------------------
  const sureNo = () => {
    setVisible(false);
    setDisabled(false);
  };
  const sureYes = () => {
    deleteSticky(stickyToDelete);
    setVisible(false);
    setDisabled(false);
  };

  const displayYearSticky = (e) => {
    e.preventDefault();
    setSelectedYearBtn(false);
    const year = parseInt(e.target.value);
    const newObject = {
      [year]: stickies[year],
    };

    setYearSticky(newObject);
    setMonths([
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
    return yearSticky;
  };

  const deleteSticky = (stickyToDelete) => {
    const day = stickyToDelete.date.substring(0, 2);
    const month = stickyToDelete.date.substring(3, 5);
    const year = stickyToDelete.date.substring(6, 10);

    const id = stickyToDelete.id;

    const newStickies = stickies[year][month][day].filter(
      (sticky) => sticky.id !== id
    );

    const numberOfMonths = Object.keys(stickies[year]);

    if (newStickies.length === 0) {
      const newMonths = [];

      if (numberOfMonths.length === 1) {
        delete stickies[year];

        setStickies({ ...stickies });
        setYearSticky(stickies);

        return stickies;
      }

      months.filter((monthItem) => {
        if (monthItem.number === month) {
          return !monthItem.used;
        }
        newMonths.push(monthItem);
      });
      setMonths(newMonths);
    }

    setStickies({
      ...stickies,
      [year]: {
        ...stickies[year],
        [month]: { ...stickies[year][month], [day]: newStickies },
      },
    });

    return stickies;
  };

  return (
    <>
      {stickies === null ||
      stickies === undefined ||
      Object.keys(stickies).length === 0 ? (
        <div className="stikies-board">
          <div className="to-sticky-btn">
            <button className="create-sticky" onClick={() => navigate("/")}>
              back to Create Sticky
            </button>
          </div>
          <div className="app-header">
            <h1 className="app-title">STICKIES BOARD</h1>
          </div>
          <h1 className="no-sticky">You have NO sticky to display!</h1>
        </div>
      ) : (
        <div className="stikies-board">
          <div className="to-sticky-btn">
            <button className="create-sticky" onClick={() => navigate("/")}>
              back to Create Sticky
            </button>
          </div>
          <div className="app-header">
            <h1 className="app-title">STICKIES BOARD</h1>
          </div>
          <div className="years-btn-container">
            {Object.keys(stickies)
              .sort()
              .map((year, i) => {
                return (
                  <button
                    style={{ color: i === 0 && selectedYearBtn && "green" }}
                    className="year-btn"
                    key={i}
                    onClick={(e) => displayYearSticky(e)}
                    value={year}
                  >
                    {year}
                  </button>
                );
              })}
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

                    <div className="month-container" id={`id-${i}`}>
                      {makeSticky(yearSticky)
                        .filter((sticky) => {
                          return (
                            sticky.date[3] + sticky.date[4] === month.number
                          );
                        })
                        .map((sticky, i) => {
                          return (
                            <Stiky
                              setVisible={setVisible}
                              setStickies={setStickies}
                              disabled={disabled}
                              setDisabled={setDisabled}
                              stickies={stickies}
                              setStickyToDelete={setStickyToDelete}
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
                      <button
                        value={i}
                        style={{
                          display:
                            makeSticky(yearSticky).filter((sticky) => {
                              return (
                                sticky.date[3] + sticky.date[4] === month.number
                              );
                            }).length > 3
                              ? "block"
                              : "none",
                        }}
                        id="slideLeft"
                        onClick={() => prev(i)}
                      >
                        <FaAngleLeft />
                      </button>
                      <button
                        value={i}
                        style={{
                          display:
                            makeSticky(yearSticky).filter((sticky) => {
                              return (
                                sticky.date[3] + sticky.date[4] === month.number
                              );
                            }).length > 3
                              ? "block"
                              : "none",
                        }}
                        id="slideRight"
                        onClick={() => next(i)}
                      >
                        <FaAngleRight />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

          <div style={{ display: !visible ? "none" : "block" }}>
            <Modal yes={sureYes} no={sureNo} />
          </div>
        </div>
      )}
    </>
  );
};

export default StickiesBoard;

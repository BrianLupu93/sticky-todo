import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import StickiesBoard from "./components/stickies-board/StickiesBoard";

function App() {
  // ----------------- GLOBAL STATE ----------------------------------

  const [stickies, setStickies] = useState([]);

  const [months, setMonths] = useState([
    { name: "January", number: "01", used: false, count: 0 },
    { name: "February", number: "02", used: false, count: 0 },
    { name: "March", number: "03", used: false, count: 0 },
    { name: "April", number: "04", used: false, count: 0 },
    { name: "May", number: "05", used: false, count: 0 },
    { name: "June", number: "06", used: false, count: 0 },
    { name: "July", number: "07", used: false, count: 0 },
    { name: "August", number: "08", used: false, count: 0 },
    { name: "September", number: "09", used: false, count: 0 },
    { name: "October", number: "10", used: false, count: 0 },
    { name: "November", number: "11", used: false, count: 0 },
    { name: "December", number: "12", used: false, count: 0 },
  ]);

  // ----------------- DEFAULF STICKY DATA ----------------------------------
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  // ----------------- FUNCTIONS ----------------------------------

  const setData = (data) => setStickies([...stickies, data]);

  const checkMonthName = (sticky) => {
    const stickyMonth = sticky.month;

    const newMonths = months.map((monthItem) => {
      if (monthItem.number === stickyMonth && !monthItem.used) {
        return {
          ...monthItem,
          used: !monthItem.used,
          count: monthItem.count + 1,
        };
      }
      if (monthItem.number === stickyMonth) {
        return { ...monthItem, count: monthItem.count + 1 };
      }

      return monthItem;
    });
    setMonths(newMonths);
  };

  const sortStickies = (stickiesList) => {
    const newStickiesList = stickiesList.sort(
      (a, b) =>
        parseInt(a.year) - parseInt(b.year) ||
        parseInt(a.month) - parseInt(b.month) ||
        parseInt(a.day) - parseInt(b.day)
    );

    setStickies(newStickiesList);
  };

  // ----------------- SIDE EFFECTS ----------------------------------

  useEffect(() => {
    if (stickies.length > 0) {
      checkMonthName(stickies[stickies.length - 1]);
      sortStickies(stickies);
    }
  }, [stickies]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              day={day}
              month={month}
              year={year}
              setStickies={setData}
              stickies={stickies}
            />
          }
        />
        <Route
          path="/stickies-board"
          element={<StickiesBoard stickies={stickies} months={months} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

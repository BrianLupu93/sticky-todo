import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import StickiesBoard from "./components/stickies-board/StickiesBoard";
import { set } from "react-hook-form";

function App() {
  // ----------------- GLOBAL STATE ----------------------------------

  const [stickies, setStickies] = useState([
    {
      title: "Test",
      body: "body body body",
      day: "03",
      month: "08",
      year: "2022",
    },
  ]);

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
  // ----------------- DEFAULF STICKY DATA ----------------------------------
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  // ----------------- FUNCTIONS ----------------------------------

  const setData = (data) => setStickies([...stickies, data]);

  const checkMonthName = (sticky) => {
    const stickyMonth = sticky.month;

    const newMonths = months.map((monthItem) => {
      if (monthItem.number === stickyMonth && !monthItem.used) {
        return { ...monthItem, used: !monthItem.used };
      }
      return monthItem;
    });
    setMonths(newMonths);
    console.log(months);
  };
  // ----------------- SIDE EFFECTS ----------------------------------

  useEffect(() => {
    if (stickies) {
      checkMonthName(stickies[stickies.length - 1]);
    }
  }, [stickies]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home day={day} month={month} year={year} setStickies={setData} />
          }
        />
        <Route
          path="/stickies-board"
          element={<StickiesBoard stickies={stickies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

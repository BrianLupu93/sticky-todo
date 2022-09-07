import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import StickiesBoard from "./components/stickies-board/StickiesBoard";

function App() {
  // ----------------- GLOBAL STATE ----------------------------------

  const [stickies, setStickies] = useState();

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

  // ----------------- DEFAULT STICKY DATA ----------------------------------
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  // ----------------- FUNCTIONS ----------------------------------

  // ----------------- SIDE EFFECTS ----------------------------------

  useEffect(() => {}, [stickies]);

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
              setStickies={setStickies}
              stickies={stickies}
            />
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

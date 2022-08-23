import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import StickiesBoard from "./components/stickies-board/StickiesBoard";
import { set } from "react-hook-form";

function App() {
  const [stickies, setStickies] = useState([]);

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const setData = (data) => setStickies(data);

  console.log(stickies);

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

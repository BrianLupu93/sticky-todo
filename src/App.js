import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import StickiesBoard from "./components/stickies-board/StickiesBoard";

function App() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home day={day} month={month} year={year} />}
        />
        <Route path="/stickies-board" element={<StickiesBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import StickiesBoard from "./components/stickies-board/StickiesBoard";
import EditForm from "./components/edit-form/EditForm";

function App() {
  // ----------------- GLOBAL STATE ----------------------------------

  const [stickies, setStickies] = useState();

  // ----------------- DEFAULT STICKY DATA ----------------------------------
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  // ----------------- FUNCTIONS ----------------------------------

  // ----------------- SIDE EFFECTS ----------------------------------

  useEffect(() => {}, [stickies]);

  return (
    <HashRouter>
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
          element={
            <StickiesBoard stickies={stickies} setStickies={setStickies} />
          }
        />

        <Route
          path="/edit"
          element={<EditForm stickies={stickies} setStickies={setStickies} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

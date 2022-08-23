import "./App.css";
import InputForm from "./components/input-form/InputForm";
import { useState } from "react";
import Sticky from "./components/sticky/Sticky";

function App() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    <div className="App">
      <div className="app-header">
        <h1 className="app-title">My sticky Notes</h1>
        <h2 className="app-subtitle">Create - Track - Keep</h2>
        <h4 className="app-subtitle2">YOUR DAILY TASKS</h4>
      </div>
      <div className="app-body">
        <InputForm day={day} month={month} year={year} />
      </div>
      <div className="app-footer">
        <button className="to-stickies-btn">TO MY STICKIES</button>
      </div>
    </div>
  );
}

export default App;

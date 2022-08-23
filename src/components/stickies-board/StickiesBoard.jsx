import React from "react";
import Stiky from "../sticky/Sticky";
import "./StickiesBoard.css";

const StickiesBoard = () => {
  return (
    <div className="stikies-board">
      <Stiky title={"Brian"} body={"Programare dentis"} date={"22/34/5555"} />
      <Stiky title={"Alex"} body={"Programare dentis"} date={"23/56/7555"} />
      <Stiky title={"Mark"} body={"Programare dentis"} date={"11/11/1111"} />
    </div>
  );
};

export default StickiesBoard;

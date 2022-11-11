import React from "react";
import "./Toast.css";

const Toast = ({ message, position }) => {
  return (
    <>
      <div className={`toast-container-${position} `}>
        <div className="toast-header">ERROR!</div>
        <div className="toast-body">{message}</div>
      </div>
    </>
  );
};

export default Toast;

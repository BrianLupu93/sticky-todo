import React from "react";
import "./Toast.css";

const Toast = ({ message, position, type }) => {
  return (
    <>
      <div className={`toast-container-${position} `}>
        <div
          className={
            type === "ERROR!" ? "toast-header-error" : "toast-header-complete"
          }
        >
          {type}
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </>
  );
};

export default Toast;

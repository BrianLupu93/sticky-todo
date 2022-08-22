import React from "react";
import "./Sticky.css";

const Sticky = (props) => {
  return (
    <>
      <div className="sticky-container">
        <div className="sticky-content">
          <div className="header">
            <h1 className="title">{props.title}</h1>
          </div>
          <div className="body">
            <p>{props.body}</p>
          </div>
          <div className="footer">
            <div className="date">{props.date}</div>
            <div className="sticky-btns">
              <button className="edit-btn">edit</button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sticky;

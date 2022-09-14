import React from "react";
import "./Sticky.css";
import { useNavigate } from "react-router-dom";

const Sticky = ({ style, title, body, date }) => {
  const navigate = useNavigate();

  const editSticky = ({ style, title, body, date }) => {
    navigate("/edit", {
      state: { data: style, title, body, date },
    });
  };

  return (
    <div style={style}>
      <div className="sticky-container">
        <div className="sticky-content">
          <div className="header">
            <h1 className="title">{title}</h1>
          </div>
          <div className="body">
            <p>{body}</p>
          </div>
          <div className="footer">
            <div className="date">{date}</div>
            <div className="sticky-btns">
              <button
                className="edit-btn"
                onClick={() => editSticky({ style, title, body, date })}
              >
                edit
              </button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sticky;

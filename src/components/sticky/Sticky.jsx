import React from "react";
import "./Sticky.css";
import { useNavigate } from "react-router-dom";

const Sticky = ({ title, body, date, id }) => {
  const navigate = useNavigate();

  const editSticky = ({ title, body, date, id }) => {
    navigate("/edit", {
      state: { title: title, body: body, date: date, id: id },
    });
  };

  return (
    <>
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
                onClick={() => editSticky({ title, body, date, id })}
              >
                edit
              </button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sticky;

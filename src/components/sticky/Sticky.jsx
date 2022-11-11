import React from "react";
import "./Sticky.css";
import { useNavigate } from "react-router-dom";

const Sticky = ({
  title,
  body,
  date,
  id,
  setStickies,
  stickies,
  setVisible,
  setDisabled,
  disabled,
  setStickyToDelete,
}) => {
  const navigate = useNavigate();

  // ----------------- FUNCTIONS ----------------------------------

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
                disabled={disabled}
                className="edit-btn"
                onClick={() => editSticky({ title, body, date, id })}
              >
                edit
              </button>
              <button
                disabled={disabled}
                className="delete-btn"
                onClick={() => {
                  setStickyToDelete({
                    title: title,
                    body: body,
                    date: date,
                    id: id,
                  });
                  setVisible(true);
                  setDisabled(true);
                }}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sticky;

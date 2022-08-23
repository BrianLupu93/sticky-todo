import React from "react";
import "./InputForm.css";

const InputForm = () => {
  return (
    <>
      <form action="submit" className="sticky-form">
        <div className="sticky-container">
          <div className="sticky-content">
            <div className="header">
              <h1 className="title">
                <input
                  className="input-title "
                  type="text"
                  placeholder="Sticker Title"
                />
              </h1>
            </div>
            <div className="body">
              <p>
                <textarea
                  className="input-body"
                  type="text"
                  placeholder="Sticker text holder"
                />
              </p>
            </div>
            <div className="footer">
              <div className="date">dd-mm-yyyy</div>
              <div className="sticky-btns">
                <button className="submit-btn">Submit Sticky</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputForm;

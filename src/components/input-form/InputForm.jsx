import React from "react";

const InputForm = ({ day, month, year }) => {
  if (day.toString().length < 2) {
    day = "0" + day;
  }
  if (month.toString().length < 2) {
    month = "0" + month;
  }

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
              <div className="input-date">
                <div className="date">
                  <input className="input-date day" placeholder={day} />
                  /
                  <input className="input-date month" placeholder={month} />
                  /
                  <input className="input-date year" placeholder={year} />
                </div>
              </div>
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

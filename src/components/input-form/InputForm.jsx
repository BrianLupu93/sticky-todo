import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const InputForm = ({ day, month, year, setStickies }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setStickies(data);
    reset();
  };

  if (day.toString().length < 2) {
    day = "0" + day;
  }
  if (month.toString().length < 2) {
    month = "0" + month;
  }

  return (
    <>
      <form
        action="submit"
        className="sticky-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="sticky-container">
          <div className="sticky-content">
            <div className="header">
              <h1 className="title">
                <input
                  {...register("title", { required: true })}
                  className="input-title "
                  type="text"
                  placeholder="Sticker Title"
                />
              </h1>
            </div>
            <div className="body">
              <p>
                <textarea
                  {...register("body", { required: true })}
                  className="input-body"
                  type="text"
                  placeholder="Sticker text holder"
                />
              </p>
            </div>
            <div className="footer">
              <div className="input-date">
                <div className="date">
                  <input
                    {...register("day")}
                    className="input-date day"
                    placeholder={day}
                  />
                  /
                  <input
                    {...register("month")}
                    className="input-date month"
                    placeholder={month}
                  />
                  /
                  <input
                    {...register("year")}
                    className="input-date year"
                    placeholder={year}
                  />
                </div>
              </div>
              <div className="sticky-btns">
                <button type="submit" className="submit-btn">
                  Submit Sticky
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputForm;

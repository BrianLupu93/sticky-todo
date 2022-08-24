import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const InputForm = ({ day, month, year, setStickies }) => {
  day = day.toString();
  month = month.toString();
  year = year.toString();

  if (day.length < 2) {
    day = "0" + day;
  }
  if (month.length < 2) {
    month = "0" + month;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { title: "", body: "", day, month, year } });

  const onSubmit = (data) => {
    setStickies(data);
    reset();
  };

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

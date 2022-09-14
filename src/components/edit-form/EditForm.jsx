import React from "react";
import { set, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const EditForm = (props) => {
  const location = useLocation();

  const test = props.location.state || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };
  console.log(test);
  return (
    <div>
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
                    placeholder=""
                  />
                  /
                  <input
                    {...register("month")}
                    className="input-date month"
                    placeholder=""
                  />
                  /
                  <input
                    {...register("year")}
                    className="input-date year"
                    placeholder=""
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
    </div>
  );
};

export default EditForm;

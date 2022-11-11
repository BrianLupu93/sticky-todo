import Toast from "../toast/Toast";
import React from "react";
import { useForm } from "react-hook-form";
import nextId from "react-id-generator/";
import { useState } from "react";
import { useEffect } from "react";

const InputForm = ({ day, month, year, id, setStickies, stickies }) => {
  const [completeMessage, setCompleteMessage] = useState(false);

  // ----------------- DEFAULT STICKY DATA ----------------------------------
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
  } = useForm({ defaultValues: { day, month, year, id } });

  // ----------------- EFFECTS ----------------------------------

  useEffect(() => {
    if (completeMessage) {
      setTimeout(() => {
        setCompleteMessage(false);
      }, 1000);
    }
  }, [stickies]);

  // ----------------- FUNCTIONS ----------------------------------

  const sortData = (data) => {
    if (!stickies) {
      setStickies({
        [data.year]: {
          [data.month]: {
            [data.day]: [{ title: data.title, body: data.body, id: nextId() }],
          },
        },
      });
    }

    if (stickies) {
      const sameYear = Object.keys(stickies).some((year) => year === data.year);

      if (sameYear) {
        const sameMonth = Object.keys(stickies[data.year]).some(
          (month) => month === data.month
        );
        if (sameMonth) {
          const sameDay = Object.keys(stickies[data.year][data.month]).some(
            (day) => day === data.day
          );
          if (sameDay) {
            setStickies({
              ...stickies,
              [data.year]: {
                ...stickies[data.year],
                [data.month]: {
                  ...stickies[data.year][data.month],
                  [data.day]: [
                    ...stickies[data.year][data.month][data.day],
                    { title: data.title, body: data.body, id: nextId() },
                  ],
                },
              },
            });
          }
          if (!sameDay) {
            setStickies({
              ...stickies,
              [data.year]: {
                ...stickies[data.year],
                [data.month]: {
                  ...stickies[data.year][data.month],
                  [data.day]: [
                    { title: data.title, body: data.body, id: nextId() },
                  ],
                },
              },
            });
          }
        }
        if (!sameMonth) {
          setStickies({
            ...stickies,
            [data.year]: {
              ...stickies[data.year],
              [data.month]: {
                [data.day]: [
                  { title: data.title, body: data.body, id: nextId() },
                ],
              },
            },
          });
        }
      }
      if (!sameYear) {
        setStickies({
          ...stickies,
          [data.year]: {
            [data.month]: {
              [data.day]: [
                { title: data.title, body: data.body, id: nextId() },
              ],
            },
          },
        });
      }
    }
  };

  // ----------------- FORM SUBMIT ----------------------------------

  const onSubmit = (data) => {
    sortData(data);
    setCompleteMessage(true);
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
                  {...register("title", {
                    required: { value: true, message: "Type the Tiltle!" },
                  })}
                  className="input-title "
                  type="text"
                  placeholder="Sticker Title"
                />
                {errors.title && (
                  <Toast
                    message={errors.title.message}
                    position={1}
                    type={"ERROR!"}
                  />
                )}
              </h1>
            </div>
            <div className="body">
              <p>
                <textarea
                  {...register("body", {
                    required: { value: true, message: "Type the Body!" },
                  })}
                  className="input-body"
                  type="text"
                  placeholder="Sticker text holder"
                />
              </p>
              {errors.body && (
                <Toast
                  message={errors.body.message}
                  position={2}
                  type={"ERROR!"}
                />
              )}
            </div>
            <div className="footer">
              <div className="input-date">
                <div className="date">
                  <input
                    {...register("day", {
                      minLength: {
                        value: 2,
                        message: "Day must have 2 digits!",
                      },
                      maxLength: {
                        value: 2,
                        message: "Day must have 2 digits!",
                      },
                      required: { value: true, message: "Type the Day!" },
                    })}
                    className="input-date day"
                    placeholder={day}
                  />
                  {errors.day && (
                    <Toast
                      message={errors.day.message}
                      position={3}
                      type={"ERROR!"}
                    />
                  )}
                  /
                  <input
                    {...register("month", {
                      minLength: {
                        value: 2,
                        message: "Month must have 2 digits!",
                      },
                      maxLength: {
                        value: 2,
                        message: "Month must have 2 digits!",
                      },
                      required: { value: true, message: "Type the Month!" },
                    })}
                    className="input-date month"
                    placeholder={month}
                  />
                  {errors.month && (
                    <Toast
                      message={errors.month.message}
                      position={4}
                      type={"ERROR!"}
                    />
                  )}
                  /
                  <input
                    {...register("year", {
                      minLength: {
                        value: 4,
                        message: "Year must have 4 digits!",
                      },
                      maxLength: {
                        value: 4,
                        message: "Year must have 4 digits!",
                      },
                      required: { value: true, message: "Type the Year!" },
                    })}
                    className="input-date year"
                    placeholder={year}
                  />
                  {errors.year && (
                    <Toast
                      message={errors.year.message}
                      position={5}
                      type={"ERROR!"}
                    />
                  )}
                </div>
              </div>
              <div className="sticky-btns">
                <button type="submit" className="submit-btn">
                  Submit Sticky
                </button>
              </div>
            </div>

            {completeMessage && (
              <Toast
                type={"COMPLETE"}
                position={6}
                message={"A new Sticky was created!"}
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default InputForm;

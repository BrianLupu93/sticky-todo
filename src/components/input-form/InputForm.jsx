import React from "react";
import { set, useForm } from "react-hook-form";

const InputForm = ({ day, month, year, setStickies, stickies }) => {
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
  } = useForm({ defaultValues: { day, month, year } });

  // ----------------- FUNCTIONS ----------------------------------

  const sortData = (data) => {
    if (!stickies) {
      setStickies({
        [data.year]: {
          [data.month]: {
            [data.day]: [{ title: data.title, body: data.body }],
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
                    { title: data.title, body: data.body },
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
                  [data.day]: [{ title: data.title, body: data.body }],
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
                [data.day]: [{ title: data.title, body: data.body }],
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
              [data.day]: [{ title: data.title, body: data.body }],
            },
          },
        });
      }
    }
  };

  // ----------------- FORM SUBMIT ----------------------------------

  const onSubmit = (data) => {
    sortData(data);
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

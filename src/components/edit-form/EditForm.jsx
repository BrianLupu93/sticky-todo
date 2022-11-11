import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditForm = ({ stickies, setStickies }) => {
  const location = useLocation();
  const stickyData = location.state;
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      day: stickyData.date.substring(0, 2),
      month: stickyData.date.substring(3, 5),
      year: stickyData.date.substring(6, 10),
      title: stickyData.title,
      body: stickyData.body,
      id: stickyData.id,
    },
  });

  useEffect(() => {
    deleteSticky(stickyData);
  }, [stickyData]);

  // ------------------ FUNCTIONS ---------------------------

  const deleteSticky = (stickyToDelete) => {
    const day = stickyToDelete.date.substring(0, 2);
    const month = stickyToDelete.date.substring(3, 5);
    const year = stickyToDelete.date.substring(6, 10);

    const id = stickyToDelete.id;

    const newStickies = stickies[year][month][day].filter(
      (sticky) => sticky.id !== id
    );

    setStickies({
      ...stickies,
      [year]: {
        ...stickies[year],
        [month]: { ...stickies[year][month], [day]: newStickies },
      },
    });
    return stickies;
  };

  const sortData = (data) => {
    if (!stickies) {
      setStickies({
        [data.year]: {
          [data.month]: {
            [data.day]: [
              { title: data.title, body: data.body, id: stickyData.id },
            ],
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
                    { title: data.title, body: data.body, id: stickyData.id },
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
                    { title: data.title, body: data.body, id: stickyData.id },
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
                  { title: data.title, body: data.body, id: stickyData.id },
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
                { title: data.title, body: data.body, id: stickyData.id },
              ],
            },
          },
        });
      }
    }
    return stickies;
  };

  const onSubmit = (data) => {
    sortData(data);

    navigate("/stickies-board");
  };

  return (
    <>
      <div className="app-header">
        <h1 className="app-title">My sticky Notes</h1>
        <h2 className="app-subtitle">Create - Track - Keep</h2>
        <h4 className="app-subtitle2">EDIT YOUR STICKY</h4>
      </div>
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
                    required: true,
                  })}
                  className="input-title "
                  type="text"
                  placeholder="Sticker Title"
                />
              </h1>
            </div>
            <div className="body">
              <p>
                <textarea
                  {...register("body", {
                    required: true,
                  })}
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
                <button className="submit-btn" type="submit">
                  Save Sticky
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditForm;

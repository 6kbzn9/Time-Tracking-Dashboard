import React from "react";
import ellipsis from "../images/icon-ellipsis.svg";

const Task = ({ data, time, last }) => {
  return (
    <>
      {data.map((task) => {
        const timeframe = task.timeframes;
        const fre = timeframe[time];

        return (
          <div key={task.id} className={`task-container task-${task.id}`}>
            <div className="task-color"></div>
            <div className="task">
              <div className="task-header">
                <h2 className="task-title">{task.title}</h2>
                <img src={ellipsis} alt="ellipsis icon" />
              </div>

              <div className="task-body">
                <h2>{fre.current}hrs</h2>
                <p className="last">
                  Last {last} - {fre.previous}hrs
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Task;

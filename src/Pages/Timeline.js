import React from "react";
import "./styles/timeline.css";

const Timeline = () => {
  const toRadian = (angle) => {
    return (angle * Math.PI) / 180.0;
  };

  return (
    <div className="timelinContainer">
      <div className="timelineHeader">Timeline</div>
      <div className="timeline">
        {Array(1200)
          .fill(0)
          .map((doc, index) => {
            const calculation = Math.round(
              180 -
                Math.sin(toRadian(Math.sin(toRadian(index)))) +
                Math.cos(
                  toRadian(Math.sin(toRadian(index))) +
                    toRadian(Math.cos(toRadian(index)))
                ) *
                  100
            );
            console.log(
              calculation,
              // Math.round(Math.sin(Math.sin(toRadian(index)) + Math.cos(toRadian(index + Math.cos(toRadian(index))))) * 100),
              // \sin\left(\sin x\right)+\cos\left(\sin x+\cos x\right)
              index
            );
            return (
              <div
                className="timelineElement"
                style={{
                  top: calculation,
                  left: index,
                }}
              >
                .
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Timeline;

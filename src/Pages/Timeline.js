import React from "react";
import "./styles/timeline.css";

const Timeline = () => {
  const timelineData = [
    { year: 2015, event: 'Joined Daffodil Software' },
    { year: 2016, event: 'Completed 10th Grade' },
    { year: 2018, event: 'Completed 12th Grade' },
    { year: 2022, event: 'Earned B.Tech Degree' },
  ];

  return (
    <div className="timelinContainer">
      <div className="timelineHeader">Timeline</div>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <p>{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

import React from "react";
import "../styles/mode.css";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const Mode = () => {
  const nightMode = false;
  return (
    <div className="modeConatiner">
      {nightMode ? (
        <BsMoonFill
          className="icon"
          style={{ height: 30, width: 30, color: "black" }}
        />
      ) : (
        <BsSunFill
          className="icon"
          style={{ height: 30, width: 30, color: "#e1e10b" }}
        />
      )}
    </div>
  );
};

export default Mode;

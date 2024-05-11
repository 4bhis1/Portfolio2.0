import React, { useState } from "react";
import "./styles/leftNav.css";
import PAGEROUTES from "../Constants/Routes";
import SOCIAL from "../Constants/Platforms";

const Routes = () => {
  let progressHeight = 50;

  const [selectedRouteIndex, updateRouteIndex] = useState(0);

  return (
    <div className="column routesContainer">
      <div className="lists">
        <div
          className="progress"
          style={{ height: progressHeight * selectedRouteIndex }}
        />
        {PAGEROUTES.map(({ name, Icon }, index) => {
          return (
            <div
              className="list"
              key={name}
              onClick={() => {
                updateRouteIndex(index);
              }}
            >
              <div
                className={`circle ${
                  selectedRouteIndex === index ? "active" : ""
                }`}
              >
                <Icon />
              </div>

              <div
                className={`text  ${
                  selectedRouteIndex === index ? "activeText" : ""
                }`}
              >
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Social = () => {
  return (
    <div className="column socialContainer">
      <div className="socialText">Social</div>
      <div className="socials">
        {SOCIAL.map(({ name, Icon, link }) => {
          return (
            <div
              key={name}
              className="social"
              onClick={() => {
                window.open(link, "_blank");
              }}
            >
              <Icon className="socialIconStyle" />
              <div className="text">{name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LeftNav = () => {
  return (
    <>
      <Routes />
      <Social />
    </>
  );
};

export default LeftNav;

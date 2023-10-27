import React from "react";
import "../styles/skills.css";
import skills from "../Constants/Skills";

const StackCard = ({ skills }) => {
  return (
    <div className="stackCard">
      {Object.entries(skills).map(([title, value], index) => {
        return (
          <div className={`stackCardItem ${value}`} key={`skill-${index}`}>
            {title}
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skillsContainer">
      {Object.keys(skills).map((doc, index) => (
        <div className="skills">
          <div>{doc}</div>
          <StackCard skills={skills[doc]} />
        </div>
      ))}
    </div>
  );
};

export default Skills;

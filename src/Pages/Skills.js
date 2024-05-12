import React from "react";
import "./styles/skills.css";
import SKILLS from "../Constants/Skills";

const StackCard = ({ skills }) => {
  return (
    <div className="stackCard">
      {Object.entries(skills).map(([title, value]) => {
        return (
          <div className={`stackCardItem ${value}`} key={title}>
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
      {Object.keys(SKILLS).map((doc) => (
        <div className="skills" key={doc} title={doc}>
          <div className="skillText">{doc}</div>
          <StackCard skills={SKILLS[doc]} />
        </div>
      ))}
    </div>
  );
};

export default Skills;

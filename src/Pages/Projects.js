import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import "./styles/timeline.css";
import "./styles/projects.css";
import Stars from "../Components/Ratings";
import primaryProjects from "../Constants/PrimaryProjects";

const ProjectCard = ({ title, desc, liveLink, githubLink, rating, image }) => {
    return (
      <div className="project-card">
        {image && (
          <div className="project-image">
            <img src={image} alt={`${title} preview`} loading="lazy" />
          </div>
        )}
        <div className="project-content">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="links">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Live Demo
            </a>
            {Array.isArray(githubLink) ? (
              githubLink.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> {index === 0 ? "Frontend" : "Backend"}
                </a>
              ))
            ) : (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            )}
          </div>
          <div className="rating">
            <Stars rating={rating} />
            <span className="visually-hidden">Rating: {rating} out of 5</span>
          </div>
        </div>
      </div>
    );
  };

const Projects = () => {
  return (
    <div className="timelinContainer">
      <div className="timelineHeader">Projects</div>

      <div className="projects-container">
        {primaryProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

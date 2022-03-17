import React from "react";
import { isMobile } from "react-device-detect";
import projects from "../data/projects.json";
import "./Projects.css";

function Porjects() {
  const handleClick = (link) => {
    window.open(link);
  };
  const badgeArray = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
  ];
  return (
    <div className="container">
      {projects.map((project) => (
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="main-div">
              <h1 className="project-heading">{project.projectName}</h1>
              <img
                className={`img-tag ${isMobile && "mobile-img"}`}
                src={
                  project.isImageInProject
                    ? `${process.env.PUBLIC_URL}${project.imagePath}`
                    : project.imagePath
                }
                alt="image"
              />
            </div>
            <h1 className="desc-heading">
              Desciption:
              <span className="prj-year">(Year: {project.projectYear})</span>
            </h1>
            <p className="desc-p">{project.description}</p>
            <div className="tech-used">
              Technologies used:
              {project.technologiesUsed.map((tech) => (
                <span
                  className={`badge  badge-span ${
                    badgeArray[Math.floor(Math.random() * badgeArray.length)]
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="row btn-div">
              {project.githubUrl && (
                <button
                  className="col-sm-4 black-btn"
                  onClick={() => handleClick(project.githubUrl)}
                >
                  <i className="fa-brands fa-github "> </i> Github
                </button>
              )}
              {project.demoUrl && (
                <button
                  className="col-sm-4 orange-btn"
                  onClick={() => handleClick(project.demoUrl)}
                >
                  <i class="fa-solid fa-up-right-from-square"></i> Demo
                </button>
              )}

              {project.documentationUrl && (
                <button
                  className="col-sm-4 black-btn"
                  onClick={() => handleClick(project.documentationUrl)}
                >
                  <i class="fa-solid fa-book"></i> Documentation
                </button>
              )}
            </div>
            <hr key={project.projectName} className="hr-end" />
          </div>
          <div className="col-sm-3"></div>
        </div>
      ))}
    </div>
  );
}

export default Porjects;

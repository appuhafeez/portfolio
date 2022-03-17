import React from "react";
import { isDesktop } from "react-device-detect";
import educationData from "../data/exp-edu.json";
import "./Experience.css";

function Education() {
  function getMonth(date) {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return month[date.getMonth()];
  }

  function getFormalDate(date) {
    return getMonth(date) + " " + date.getFullYear();
  }

  const handleClick = (link) => {
    window.open(link);
  };

  function getStartAndDate(dtFrom, dTo) {
    let fromDateFormal = getFormalDate(new Date(dtFrom));
    if (dTo !== "Present") {
      return fromDateFormal + " - " + getFormalDate(new Date(dTo));
    } else {
      return fromDateFormal + " - Present";
    }
  }

  return (
    <div className="container">
      {educationData.education.map((education) => (
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-3">
                <img
                  className="img-logo"
                  src={education.collageLogoUrl}
                  alt="logo"
                />
              </div>
              <div className="col-9">
                <h1
                  className="basic_info company-name"
                  onClick={() => handleClick(education.collageSite)}
                >
                  {education.companyName}
                </h1>
                <h1 className="basic_info years-exp clg-name">
                  {education.degree} in {education.field}
                </h1>
                <h1 className="basic_info years-exp from-to">
                  {getStartAndDate(education.from, education.to)}
                </h1>
                <h1 className="basic_info years-exp">
                  Grade/CGPA: {education.grade}
                </h1>
              </div>
            </div>
            <ul className={`full-info ${isDesktop && "desktop"}`}>
              {education.works.map((work) => (
                <li className="more-list">{work}</li>
              ))}
            </ul>
            <hr key={education.companyName} className="hr-end" />
          </div>
          <div className="col-sm-3"></div>
        </div>
      ))}
    </div>
  );
}

export default Education;

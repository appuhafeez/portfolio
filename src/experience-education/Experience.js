import React from "react";
import { isDesktop } from "react-device-detect";
import data from "../data/exp-edu.json";
import "./Experience.css";

function Experience(type) {
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

  const handleClick = (link) => {
    window.open(link);
  };

  function getFormalDate(date) {
    return getMonth(date) + " " + date.getFullYear();
  }

  function getStartAndDate(dtFrom, dTo) {
    let fromDateFormal = getFormalDate(new Date(dtFrom));
    if (dTo !== "Present") {
      return fromDateFormal + " - " + getFormalDate(new Date(dTo));
    } else {
      return fromDateFormal + " - Present";
    }
  }

  function getExperience(dtFrom, dtTo) {
    let fromDate = new Date(dtFrom);
    let toDate = new Date();
    if (dtTo !== "Present") {
      toDate = new Date(dtTo);
    }
    //console.log(fromDate.getTime() + " " + toDate.getTime());
    var time = (fromDate.getTime() - toDate.getTime()) / 1000;
    var year = Math.abs(Math.trunc(time / (60 * 60 * 24) / 365.25));
    var month = Math.abs(Math.trunc(time / (60 * 60 * 24 * 30)) % 12);
    //console.log(days);
    return year + " yr " + month + " mos";
  }
  return (
    <div>
      {data.experience.map((experience) => (
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-3">
                <img
                  className="img-logo"
                  src={experience.companyLogoUrl}
                  alt="logo"
                />
              </div>
              <div className="col-9">
                <h1
                  className="basic_info company-name"
                  onClick={() => handleClick(experience.companySite)}
                >
                  {experience.companyName}
                </h1>
                <h1 className="basic_info years-exp">
                  {`${experience.type}  .  ${getExperience(
                    experience.from,
                    experience.to
                  )}`}
                </h1>
              </div>
            </div>
            <div>
              {type.type === "experience" &&
                experience.works?.map((work) => (
                  <div className={`full-info ${isDesktop && "desktop"} `}>
                    <h1 className="designation">{work.designation}</h1>
                    <h1 className="start-end">
                      {getStartAndDate(work.from, work.to)}
                    </h1>
                    <ul>
                      {work.more.map((moreList) => (
                        <li className="more-list">{moreList}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            <hr key={experience.companyName} className="hr-end" />
          </div>
          <div className="col-sm-3"></div>
        </div>
      ))}
    </div>
  );
}

export default Experience;

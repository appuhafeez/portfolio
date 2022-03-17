import React from "react";
import data from "../data/awards.json";
import "../experience-education/Experience.css";
import "./Awards.css";

function Awards({ type, isCert }) {
  function getType() {
    console.log(type);
    if (type === "certificate") {
      return data.certifications;
    } else {
      return data.awards;
    }
  }

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
    if (date === "No") {
      return "No Expiry";
    }
    const dateFinal = new Date(date);
    return getMonth(dateFinal) + " " + dateFinal.getFullYear();
  }

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div className="container">
      {getType().map((cert) => (
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3 div-data">
            <div className="row">
              <div className="col-4">
                <img
                  onClick={() => handleClick(cert.webLink)}
                  className="img-logo"
                  alt="logo"
                  src={cert.issuedByImage}
                />
              </div>
              <div className="col-8">
                <h1 className="basic_info company-name">{cert.name}</h1>
                <h1 className="basic_info years-exp">
                  {getFormalDate(cert.issuedOn)}{" "}
                  {isCert && <span> - {getFormalDate(cert.validFor)}</span>}
                </h1>
                <h1 className="start-end">issued by {cert.issuedBy}</h1>
              </div>
            </div>
            {cert.desc && <p className="more-list">{cert.desc}</p>}
            <button
              onClick={() => handleClick(cert.link)}
              className="black-btn"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i> Open
              document
            </button>
            <hr key={cert.name} className="hr-end" />
          </div>
          <div className="col-sm-3"></div>
        </div>
      ))}
    </div>
  );
}

export default Awards;

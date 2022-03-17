import React from "react";
import "./Publications.css";
import publications from "../data/awards.json";

function Publications() {
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
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          {publications.publications.map((pub) => (
            <div>
              <div className="row">
                <div className="col-4">
                  <img
                    className="image-pub"
                    src={`${process.env.PUBLIC_URL}${pub.journalImagePath}`}
                  />
                </div>
                <div className="col-8">
                  <h1 className="issn-e">
                    E-ISSN: <span className="issn-s">{pub.ISSN}</span>
                  </h1>
                  <h1 className="issn-e">
                    Date:{" "}
                    <span className="issn-s">{getFormalDate(pub.date)}</span>
                  </h1>
                  <button
                    onClick={() => handleClick(pub.paperLink)}
                    className="black-btn"
                  >
                    <i className="fa fa-external-link" aria-hidden="true"></i>{" "}
                    Open paper
                  </button>
                  <button
                    onClick={() => handleClick(pub.scopusPage)}
                    className="black-btn"
                  >
                    <i className="fa fa-external-link" aria-hidden="true"></i>{" "}
                    Open scopus page
                  </button>
                </div>
              </div>
              <h1 className="title-h">
                Title: <span className="title-s">{pub.title}</span>
              </h1>
              <h1 className="title-h">
                Journal: <span className="title-s">{pub.journalName}</span>
              </h1>
              <hr key={pub.title} className="hr-end" />
            </div>
          ))}
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default Publications;

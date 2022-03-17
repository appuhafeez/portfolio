import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import intro from "../data/intro.json";
import "./QuickIntro.css";

function QuickInfo() {
  function getExperience(dtFrom) {
    let fromDate = new Date(dtFrom);
    let toDate = new Date();
    //console.log(fromDate.getTime() + " " + toDate.getTime());
    var time = (fromDate.getTime() - toDate.getTime()) / 1000;
    var year = Math.abs(Math.trunc(time / (60 * 60 * 24) / 365.25));
    var month = Math.abs(Math.trunc(time / (60 * 60 * 24 * 30)) % 12);
    //console.log(days);
    return year + " yr " + month + " mos";
  }

  const body = (
    <div className="body-div">
      <h1 className="name-h main-head">About me</h1>
      <h1 className="name-h">
        Name: <span className="name-d">{intro.name}</span>
      </h1>
      <h1 className="name-h">
        Total experience:{" "}
        <span className="name-d">{getExperience(intro.careerStartDate)}</span>
      </h1>
      <h1 className="name-h">
        About:{" "}
        <span className="name-d aboutme">
          {intro.desc.map((descShort) => (
            <li>{descShort}</li>
          ))}
        </span>
      </h1>
      <h1 className="name-h">
        Top skills:{" "}
        <span className="name-d aboutme">
          {intro.topSkills.map((skill) => skill).join(", ")}
        </span>
      </h1>
    </div>
  );
  return (
    <div className="container main-div" id="about">
      <BrowserView>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <img
              className="img-quick-intro"
              src={`${process.env.PUBLIC_URL}${intro.profilePicUrl}`}
              alt="profile"
            />
          </div>
          <div
            className="col-sm-5 edge-adjust"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-about-me.jpeg)`,
            }}
          >
            {body}
          </div>
          <div className="col-sm-1"></div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          className="mobile-body edge-adjust"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-about-me.jpeg)`,
          }}
        >
          <img
            className="mobile-view-img"
            src={`${process.env.PUBLIC_URL}${intro.profilePicUrl}`}
            alt="profile"
          ></img>
          {body}
        </div>
      </MobileView>
    </div>
  );
}

export default QuickInfo;

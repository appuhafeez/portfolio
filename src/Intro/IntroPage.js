import React from "react";
import Particles from "react-tsparticles";
import ITyped from "react-ityped";
import particlesOptions from "../particles.json";
import mobileParticlesOptions from "../particles-among-us.json";
import "./IntroPage.css";
import intro from "../data/intro.json";
import { BrowserView, MobileView } from "react-device-detect";
import Link from "react-scroll/modules/components/Link";

function IntroPage() {
  const strings = intro["top-skills"];

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div id="home">
      <BrowserView>
        <Particles options={particlesOptions} />
      </BrowserView>
      <MobileView>
        <Particles options={mobileParticlesOptions} />
      </MobileView>
      <div className="container">
        <div className="row row-div">
          <div className="col-md-4 ">
            <img
              className="portfolio-picture"
              src={`${process.env.PUBLIC_URL}${intro.profilePicUrl}`}
              alt="profile"
            />
          </div>
          <div className="col-md-8 top-padding-side">
            <h1 className="social-id">
              <i
                className="fa fa-instagram social-id-span"
                onClick={() => handleClick(intro.socialLinks.instagram)}
              ></i>
              <i
                className="fa-brands fa-linkedin social-id-span"
                onClick={() => handleClick(intro.socialLinks.linkedIn)}
              ></i>
              <i
                className="fa-brands fa-facebook social-id-span"
                onClick={() => handleClick(intro.socialLinks.facebook)}
              ></i>
              <i
                className="fa-brands fa-github social-id-span"
                onClick={() => handleClick(intro.socialLinks.github)}
              ></i>
              <i
                className="fa-brands fa-twitter social-id-span"
                onClick={() => handleClick(intro.socialLinks.twitter)}
              ></i>
            </h1>
            <h1 className="quick-info">
              Hi, I'am{" "}
              <span className="name-span">
                {" "}
                {process.env.REACT_APP_PROFILE_NAME}
              </span>
            </h1>
            <ITyped
              className="container ityped-cursor typed-cursor"
              showCursor={true}
              strings={strings}
              typeSpeed={50}
              backSpeed={50}
              startDelay={"none"}
              backDelay={350}
            />
            <div className="buttons-div">
              <button className="more-info-btn">
                <Link to="about">
                  <i className="fa-solid fa-circle-info"></i> More Info
                </Link>
              </button>

              <button
                onClick={() => handleClick(intro.resume)}
                className="download-btn"
              >
                <i className="fa-solid fa-download"></i> Download Resume
              </button>
            </div>
          </div>
        </div>
        <div className="endpadding"></div>
      </div>
    </div>
  );
}

export default IntroPage;

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { isDesktop, isMobile } from "react-device-detect";
import "./ArtCard.css";

function ArtCard({ art }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const openLink = (link) => {
    window.open(link);
  };

  function onHover() {
    if (!isMobile) {
      setIsFlipped((prev) => !prev);
    }
  }

  function handleClick() {
    if (isMobile) {
      setIsFlipped((prev) => !prev);
    }
  }

  return (
    <div className="col-sm-4">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
        <div
          className="card-front card"
          onClick={() => handleClick()}
          onMouseEnter={() => onHover()}
        >
          <img
            className="art-img"
            width={"300px"}
            height={"380px"}
            src={art.photoLink}
            alt="art"
          />
        </div>
        <div
          className="card-back card"
          onClick={() => handleClick()}
          onMouseLeave={() => onHover()}
        >
          <h1 className="heading-class">
            Materials used in this are:
            <span className="crafts-used">
              {" "}
              {art.craftsUsed.map((craft) => craft).join(", ")}
            </span>{" "}
          </h1>
          <button
            onClick={() => openLink(art.twitterLink)}
            className="black-btn"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i> Open tweet
          </button>
          <button onClick={() => openLink(art.photoLink)} className="black-btn">
            <i className="fa fa-arrow-down" aria-hidden="true"></i> Download
            image
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default ArtCard;

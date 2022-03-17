import React from "react";
import "./Header.css";
import particleOptions from "../particles-art.json";
import Particles from "react-tsparticles";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goToLink = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Particles options={particleOptions} />
      <div className="header-art">
        <button onClick={() => goToLink("/")} className="home-button">
          <i className="fa fa-chevron-left" aria-hidden="true"></i> Home
        </button>
      </div>
    </div>
  );
}

export default Header;

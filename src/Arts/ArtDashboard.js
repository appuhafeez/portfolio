import React from "react";
import ArtCard from "./ArtCard";
import Header from "./Header";
import "./ArtDashboard.css";
import arts from "../data/arts.json";

function ArtDashboard() {
  return (
    <div>
      <Header />
      <div className="container top-padding">
        <div className="row">
          {arts.map((art) => (
            <ArtCard art={art} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtDashboard;

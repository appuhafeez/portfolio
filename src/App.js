import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArtDashboard from "./Arts/ArtDashboard";
import TabView from "./awards-rewards/TabView";
import ContactMe from "./contact/ContactMe";
import MainSection from "./experience-education/MainSection";
import IntroPage from "./Intro/IntroPage";
import QuickInfo from "./Intro/QuickInfo";
import Nav from "./Nav/Nav";

function App() {
  const homeDiv = (
    <div>
      <Nav />
      <IntroPage />
      <QuickInfo />
      <MainSection />
      <TabView />
      <ContactMe />
    </div>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={homeDiv} />
        <Route path="/arts" element={<ArtDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Treading from "./treading/Treading";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Treading/>
    </div>
  );
};

export default Home;

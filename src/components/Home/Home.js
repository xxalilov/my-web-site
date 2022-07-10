import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="main">
      <div className="home-bg">
        <div className="home-bg-1"></div>
        <div className="home-container">
          <div className="info-container">
            <div className="info">
              <div className="in">
                <h1>Xolbek Xalilov</h1>
                <h3>Javascript FullStack Developer</h3>
              </div>
            </div>
            <a className="download">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

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

      <div className="skills">
        <h1 className="skills-header">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <div className="skills-container">
          <div className="skill">
            <img src="/assets/javascript.webp" />
            <img src="/assets/typescript.webp" />
            <img src="/assets/nodejs.webp" />
          </div>
          <div className="skill">
            <img src="/assets/express.png" />
            <img src="/assets/mongodb.png" />
            <img src="/assets/postgresql.png" />
          </div>
          <div className="skill">
            <img src="/assets/redis.png" />
            <img src="/assets/docker.png" />
            <img src="/assets/kubernetes.png" />
          </div>
          <div className="skill">
            <img src="/assets/aws.webp" />
            <img src="/assets/digitalocean.webp" />
            <img src="/assets/react.png" />
          </div>
        </div>
      </div>

      <div className="portfolio"></div>
    </section>
  );
};

export default Home;

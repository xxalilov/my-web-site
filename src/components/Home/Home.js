import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="main">
      {/* HOME */}
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

      {/* SKILLS */}
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

      {/* PORTFOLIO */}
      <div className="portfolio">
        <div className="portfolio-container">
          <h1 className="pr-header">Projects</h1>
          <div className="portfolios">
            <div className="pr">
              <div className="pr-image">
                <img src="https://images.unsplash.com/photo-1657437998546-0cc5458d9449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div className="pr-title">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="pr-btns">
                <a href="#">Code</a>
                <a href="#">Live</a>
              </div>
            </div>
            <div className="pr">
              <div className="pr-image">
                <img src="https://images.unsplash.com/photo-1657437998546-0cc5458d9449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div className="pr-title">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="pr-btns">
                <a href="#">Code</a>
                <a href="#">Live</a>
              </div>
            </div>
            <div className="pr">
              <div className="pr-image">
                <img src="https://images.unsplash.com/photo-1657437998546-0cc5458d9449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div className="pr-title">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="pr-btns">
                <a href="#">Code</a>
                <a href="#">Live</a>
              </div>
            </div>
          </div>
          <div className="all-projects-btn">
            <a href="#">All projects {">>>>"}</a>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <div className="portfolio blogs">
        <div className="portfolio-container">
          <h1 className="pr-header blog-header">Blogs</h1>
          <div className="portfolios">
            <div className="pr blog">
              <div className="pr-title blog-title">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="pr-btns">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="pr blog">
              <div className="pr-title blog-title">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="pr-btns">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="pr blog">
              <div className="pr-title blog-title">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="pr-btns">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="all-projects-btn">
            <a href="#">All blogs {">>>>"}</a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact" id="contact">
        <div className="contact-container">
          <div className="right">
            <h2>Phone</h2>
            <a>+998973130903</a>
            <br />
            <a>+998900099776</a>
          </div>
          <div className="right">
            <h2>Telegram</h2>
            <a href="https://t.me/Xalilov_01" target={"_blank"}>
              @Xalilov_01
            </a>
          </div>
          <div className="right">
            <h2>Email</h2>
            <a href="https://t.me/Xalilov_01">kholbekkhalilov@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

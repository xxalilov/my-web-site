import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  return (
    <header>
      <div className="header">
        <div className="logo">
          <h1>xolbek</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact me</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header mobile">
        <div className="mobile-header">
          <div className="logo">
            <h1>xolbek</h1>
          </div>
          <div className="navbar-btn">
            <h3
              style={{ color: "white" }}
              onClick={() => setIsOpenNavbar(!isOpenNavbar)}
            >
              {!isOpenNavbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              )}
            </h3>
          </div>
        </div>
        <nav
          className="navbar"
          style={{ height: isOpenNavbar ? `350px` : "0" }}
        >
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

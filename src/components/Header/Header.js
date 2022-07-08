import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <h1>Xolbek Xalilov</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">About</a>
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

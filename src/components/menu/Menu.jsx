// import React from "react";
import "./menu.scss";
export default function Menu({ menuOpen, setMenuOpen }) {
  function handleClick() {
    setMenuOpen(false);
  }
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a onClick={handleClick} href="#intro">
            Home
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#works">
            Works
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

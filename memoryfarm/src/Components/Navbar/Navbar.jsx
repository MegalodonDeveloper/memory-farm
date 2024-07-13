import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar">
      <h1>MemoryFarm</h1>
      <ul class="menu">
        <li>Main</li>
        <li>Tutorial</li>
        <li>Contact</li>
        <li>About</li>
        <li>Play</li>
      </ul>
    </nav>
  );
}

export default Navbar;

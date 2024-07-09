'use client'

import { useEffect, React } from "react";

function toggleNavBar() {
  useEffect(() => {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }, []);
}

export default function NavBar() {
  return (
    <div className="w3-top">
      <div className="w3-bar" id="myNavbar">
        <a
          className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
          href="javascript:void(0);"
          onClick={toggleNavBar}
          title="Toggle Navigation Menu"
        >
          <i className="fa fa-bars" />
        </a>
        <a href="#home" className="w3-bar-item w3-button">
          HOME
        </a>
        <a
          href="#about"
          className="w3-bar-item w3-button w3-hide-small"
          id="aboutbutton"
        >
          <i className="fa fa-user" /> ABOUT
        </a>
        <a
          href="#genie"
          className="w3-bar-item w3-button w3-hide-small"
          id="geniebutton"
        >
          <i className="fa fa-magic" /> GENIE
        </a>
        <a
          href="#links"
          className="w3-bar-item w3-button w3-hide-small"
          id="linksbutton"
        >
          <i className="fa fa-link" /> LINKS
        </a>
      </div>
      {/* Navbar on small screens */}
      <div
        id="navDemo"
        className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium"
      >
        <a
          href="#about"
          className="w3-bar-item w3-button"
          onClick={toggleNavBar}
        >
          ABOUT
        </a>
        <a
          href="#genie"
          className="w3-bar-item w3-button"
          onClick={toggleNavBar}
        >
          GENIE
        </a>
        <a
          href="#links"
          className="w3-bar-item w3-button"
          onclick={toggleNavBar}
        >
          LINKS
        </a>
      </div>
    </div>
  );
}
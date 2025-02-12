'use client'

import React from 'react';

function toggleNavBar() {
  var x = document.getElementById("navDemo");
  if (x == null) return; // This should solve TS's warning about x possibly being null... hopefully
                         // this shouldn't happen anyway.
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    // Toggle navbar style to be white if we press the toggle button
    if (document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100) {
      var navbar = document.getElementById("myNavbar");
      if (navbar == null) return; // more avoiding "may be null" errors. Should be fine??
      navbar.className = "w3-bar w3-card w3-white";
    }
  } else {
    x.className = x.className.replace(" w3-show", "");
    // Toggle navbar back to transparent if we press the toggle button while the
    // navbar menu was open
    if (document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100) {
      var navbar = document.getElementById("myNavbar");
      if (navbar == null) return;
      navbar.className = "w3-bar";
    }
  }
}

export default function NavBar() {
  return (
    <div className="w3-top">
      <div className="w3-bar" id="myNavbar">
        <a
          className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
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
          onClick={toggleNavBar}
        >
          LINKS
        </a>
      </div>
    </div>
  );
}
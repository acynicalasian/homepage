'use client'

import "./globals.css";
import NavBar from "./navbar";
import React from 'react';
import { useEffect } from 'react';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  useEffect(() => {
    // Change style of navbar on scroll
    window.onscroll = function () { myFunction() };
    function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (navbar == null) throw new Error(); // This shouldn't happen. Avoiding static analysis errors.
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
    }
  }, []);
  return (
    <html lang="en">
      <head>
        {/* The <head> tag is based off of: */}
        {/* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&stacked=h */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <base href="/" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" type="image/png" href="favicon.png" />
        <title>Arthur Kim</title>
      </head>

      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="w3-center w3-black w3-padding-64" id="foot">
      <a href="#home" className="w3-button w3-light-grey">
        <i className="fa fa-arrow-up w3-margin-right" />
        To the top
      </a>
      <div className="w3-xlarge w3-section">
        <i className="fa fa-facebook-official w3-hover-opacity" />
        <i className="fa fa-instagram w3-hover-opacity" />
        <i className="fa fa-snapchat w3-hover-opacity" />
        <i className="fa fa-pinterest-p w3-hover-opacity" />
        <i className="fa fa-twitter w3-hover-opacity" />
        <i className="fa fa-linkedin w3-hover-opacity" />
      </div>
      <p>
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          className="w3-hover-text-green"
        >
          w3.css
        </a>
      </p>
    </footer>
  );
}
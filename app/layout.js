'use client'
import RawStyle from "./rawstyle.js";
import NavBar from "./navbar.js";
import Footer from "./footer.js";
import { React, useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Change style of navbar on scroll
    window.onscroll = function () { myFunction() };
    function myFunction() {
      var navbar = document.getElementById("myNavbar");
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" type="image/png" href="favicon.png" />
        <RawStyle />
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

'use client'
import FBSDKLoad from "./genie/fbsdkload";

export default function Home() {
  return (
    <>
      {/* First Parallax Image with Logo Text */}
      <div className="bgimg-1 w3-display-container" id="home">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center my-padding-fixed w3-black w3-xlarge w3-wide w3-animate-opacity">
            ARTHUR KIM
          </span>
        </div>
      </div>
      {/* Container (About Section) */}
      <div className="w3-content w3-container w3-padding-64 snap-child" id="about">
        <h3 className="w3-center">ABOUT ME</h3>
        <p className="w3-center">
          <em>
            Aspiring software engineer/developer with an academic concentration in
            NLP.
          </em>
        </p>
        <p>
          Welcome to my website! My name&apos;s Arthur Kim and I graduated from UCLA in
          March of 2024 with a B.A. in Linguistics and Computer Science and a
          cumulative GPA of 3.007. My academic experience consists primarily of
          programming in Python and Haskell with a focus on natural language
          processing (NLP), and I have a background in C, C++, and shell scripting.
          This website serves not only as a portal to my GitHub and LinkedIn but also
          as a live project in and of itself, with an integrated webapp. Outside of
          school, I have experience writing a scraper for Wiktionary built on Python
          that uses the MediaWiki API and the Beautiful Soup HTML parsing library,
          with some exposure to the Google Cloud Natural Language API. On the other
          hand, this project has given me some familiarity with Blazor, C#, and .NET.
        </p>
        <p>
          Ideally, this website should be fluid, elegant, and functional for both
          desktop and mobile clients. If there are any issues, feel free to contact
          me via GitHub by creating a new ticket <a href="https://github.com/acynicalasian/homepage/issues">here</a> or
          by sending me a message on my LinkedIn.
        </p>
        <div className="w3-row">
          {/* Adding w3-hide-small here should hide this on small devices as well. */}
          <div className="w3-col m6 w3-center w3-padding-large w3-hide-small">
            {/* added custom-resize class to the <p> tag. */}
            <p className="custom-resize">
              <b>
                <i className="fa fa-question-circle w3-margin-right" />
                Why did I start this project?
              </b>
            </p>
            <br />
            <img
              src="/img/small_1.png"
              className="w3-round w3-image"
              alt="A picture of me doing beginner kendo"
              width={500}
              height={333}
            />
          </div>
          {/* Hide this text on small devices */}
          <div className="w3-col m6 w3-hide-small w3-padding-large">
            <p>
              My goal with this project is to demonstrate the experience I&apos;ve
              gained by self-learning HTML, CSS, JavaScript, React, and Next.js.
              React and Next.js have taught me a lot about approaching front-end
              design with a modular approach. That being said, I&apos;m sure there&apos;s
              plenty of hacky workarounds in my codebase, but I think that&apos;s a virtue
              on my end. My modus operandi has always been to hack together functional,
              yet elegant products by relying on my computer science expertise and
              piecing together various pieces of code and various frameworks as needed.
            </p>
            <p>
              As of now, I&apos;m styling and implementing the webapp. I intend to use
              Cloudflare Worker AI to generate images. Hopefully I can hack together a
              solution to generate spinoffs of your Facebook profile pictures.
            </p>
          </div>
        </div>
      </div>
      {/* Second Parallax Image with Genie Text */}
      <div className="bgimg-2 w3-display-container opacity-mod">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">GENIE</span>
        </div>
      </div>
      {/* Container (Genie Section) */}
      <div
        className="w3-content w3-container w3-padding-64 genie-area snap-child"
        id="genie"
      >
        <FBSDKLoad />
      </div>
      {/* Third Parallax Image with Links Text */}
      <div className="bgimg-3 w3-display-container opacity-mod">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">LINKS</span>
        </div>
      </div>
      {/* Container (Links Section) */}
      <div className="w3-content w3-container w3-padding-64 snap-child" id="links">
        <h3 className="w3-center">WHERE I WORK</h3>
        <p className="w3-center">
          <em>I&apos;d love your feedback!</em>
        </p>
        <div className="w3-row w3-padding-32 w3-section">
          <div className="w3-col m4 w3-container">
            <img
              src="/w3images/map.jpg"
              className="w3-image w3-round"
              style={{ width: "100%" }}
            />
          </div>
          <div className="w3-col m8 w3-panel">
            <div className="w3-large w3-margin-bottom">
              <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right" />{" "}
              Chicago, US
              <br />
              <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right" />{" "}
              Phone: +00 151515
              <br />
              <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right" />{" "}
              Email: mail@mail.com
              <br />
            </div>
            <p>
              Swing by for a cup of <i className="fa fa-coffee" />, or leave me a
              note:
            </p>
            <form action="/action_page.php" target="_blank">
              <div
                className="w3-row-padding"
                style={{ margin: "0 -16px 8px -16px" }}
              >
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    required={false}
                    name="Name"
                  />
                </div>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    required={false}
                    name="Email"
                  />
                </div>
              </div>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                required={false}
                name="Message"
              />
              <button
                className="w3-button w3-black w3-right w3-section"
                type="submit"
              >
                <i className="fa fa-paper-plane" /> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

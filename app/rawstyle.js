
export default function RawStyle() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n    body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}\n\n    body, html {\n        height: 100%;\n        color: #333;\n        line-height: 1.8;\n    }\n\n    html {\n        scroll-snap-type: y proximity;\n    }\n\n    /* Original value from template: 0.75 */\n    .opacity-mod {opacity: 0.9;}\n\n    .custom-resize {scale: 1.4;}\n\n    .snap-child {scroll-snap-align: start;}\n\n    .my-padding-fixed {\n        padding-left: 34px;\n        padding-right: 24px;\n        padding-top: 12px;\n        padding-bottom: 12px;\n    }\n\n    .genie-area {height: 100vh;}\n\n    /* Create a Parallax Effect */\n    .bgimg-1, .bgimg-2, .bgimg-3 {\n        background-attachment: fixed;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n    /* First image (Logo. Full height) */\n    .bgimg-1 {\n        background-image: url(\'/img/1.jpg\');\n        height: 100vh;\n    }\n\n    /* Second image (Portfolio) */\n    .bgimg-2 {\n        background-image: url("/img/2.jpg");\n        height: 30vh;\n    }\n\n    /* Third image (Contact) */\n    .bgimg-3 {\n        background-image: url("/img/3.jpg");\n        height: 30vh;\n    }\n\n    .w3-wide {letter-spacing: 10px;}\n    .w3-hover-opacity {cursor: pointer;}\n\n    /* Turn off parallax scrolling for tablets and phones */\n    @media only screen and (max-device-width: 1600px) {\n        .bgimg-1, .bgimg-2, .bgimg-3 {\n            background-attachment: scroll;\n            height: 30vh;\n        }\n    }\n'
      }}
    />
  );
}
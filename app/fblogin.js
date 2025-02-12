import { useEffect } from "react";

// Keep this file as JavaScript as well... I don't want to care about the implementation details of
// the default login button!

export default function FBLogin() {
  useEffect(() => {
    window.FB.XFBML.parse();
  });
  return (<div
    className="fb-login-button"
    data-width="750"
    data-size="large"
    data-button-type="continue_with"
    data-layout=""
    data-auto-logout-link="true"
    data-use-continue-as="true"
    style={{ display: "table", margin: "0 auto" }} />);
}
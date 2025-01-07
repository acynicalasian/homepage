import { useEffect } from "react";

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
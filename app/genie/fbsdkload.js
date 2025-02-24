'use client'

// I don't know if I can get the JSSDK to load properly with TypeScript, and I"m not even sure what
// type FB would be. We'll be forced to use JavaScript here instead of TypeScript, but it is what
// it is.

import { useState, useEffect } from "react";
import Genie from "./genie";

export default function FBSDKLoad() {
  const [fbLoginStatus, setFBLoginStatus] = useState("");
  useEffect(() => {
    // Load the FB SDK asynchronously
    window.fbAsyncInit = function () {
      FB.init({
        // Because Meta whitelists originating domains, we should be
        // safe to leave our appID here. Don't do this for other
        // APIs though.
        appId: '828712989097356',
        cookie: true,
        xfbml: true,
        version: 'v20.0'
      });

      FB.getLoginStatus(function(response) {        
        setFBLoginStatus(response.status);
      }, true);
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },[fbLoginStatus]);

  return (
    <Genie
      fbLoginStatus={fbLoginStatus}
      fbLoginStatusSetter={(s) => { setFBLoginStatus(s); }}
    />
  );
}
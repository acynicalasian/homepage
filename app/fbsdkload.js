'use client'

import { useState, useEffect } from "react";
import Genie from "./genie.js";
import FBLogin from "./fblogin.js";

export default function FBSDKLoad() {
  const [status, setStatus] = useState("");
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
        setStatus(response.status);
      }, true);
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },[status]);

  if (status == "connected") {
    // For now, load the FBLogin module to see if we can logout
    return <Genie/>;
  } else if (status == "not_authorized" || 
             status == "unknown") {
    return <FBLogin/>;
  } else return <p>fuck</p>;
}
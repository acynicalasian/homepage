'use client'

import { useEffect, useState } from "react";
import Genie from "./genie.js";
import FBLogin from "./fblogin.js";

export default function FBSDKLoad() {
  const [status, setStatus] = useState("");
  useEffect(() => {
    window.FB.init({
      appId   : '828712989097356',
      cookie  : true,
      xfbml   : true,
      version : 'v20.0'
    });
    window.FB.getLoginStatus(function(response) {
      setStatus(response.status);
    });
  },[]);
  if (status == "connected") {
    // For now, load the FBLogin module to see if we can logout
    return <FBLogin/>;
    //return <Genie/>;
  } else if (status == "not_authorized" || 
             status == "unknown") {
    return <FBLogin/>;
  } else return <p>fuck</p>;
}
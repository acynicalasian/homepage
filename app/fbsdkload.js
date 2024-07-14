'use client'

import { useEffect, useState } from "react";

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
  if (!status) return <p>uh oh</p>;
  else return <p>{status}</p>;
}
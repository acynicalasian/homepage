'use client'

import FBLogin from "./fblogin";
import React from 'react';

interface GenieProps {
  fbLoginStatus: string;
  fbLoginStatusSetter: (s: string) => void;
}

export default function Genie({ fbLoginStatus, fbLoginStatusSetter } : GenieProps) {
  if (fbLoginStatus === "connected") {
    return (
      // placeholder.
      <>
        Logged in.
      </>
    );
  } else if (fbLoginStatus === "not_authorized" || fbLoginStatus === "unknown") {
    return (
      <FBLogin/>
    );
  }
  // Debugging:
  else return <>Error! Not rerendering!</>;
}
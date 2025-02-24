/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { Button } from '@mui/joy';

interface FBLoginProps {
  fbLoginStatusSetter: (s: string) => void;
}

const FB_APPID = "828712989097356"

export default function FBLogin({ fbLoginStatusSetter } : FBLoginProps) {
  // 
  const [fbXSRFToken, setFBXSRFToken] = useState("");
  useEffect(() => {
    setFBXSRFToken(window.crypto.randomUUID());

  }, []);

  
}
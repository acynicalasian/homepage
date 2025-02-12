import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato&display=optional" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
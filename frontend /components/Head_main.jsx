import React from "react";
import Search from "SearchEngineOp.jsx";
import { Helmet } from "react-helmet";

export default function HeadSection({ title }) {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Search/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet"
      />

      <link rel="stylesheet" href="fonts.css" />
      <link rel="stylesheet" href="main.css" />

      <title>{title}</title>
    </Helmet>
  );
}
//fucking finally
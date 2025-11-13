import React from "react";
import Search from "./SearchEngineOp.jsx";
import Head from "next/head.js";

export default function HeadSection({ title }) {
  return (
    <Head>
      <Search/>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Search/>
      <title>{title}</title>
    </Head>
  );
}
//fucking finally
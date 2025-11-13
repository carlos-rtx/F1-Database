import React from "react";
import Head from "next/head.js";

export default function HeadSection({ title }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>
    </Head>
  );
}
//fucking finally
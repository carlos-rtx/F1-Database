import React from "react";
import Head from "next/head.js";

export default function HeadSection({ title = "F1 Database" }) {
  return (
    <Head>
      <meta property="og:url" content="https://f1-databas3.vercel.app/"/>
        {/*Facebook open graph*/}
<meta property="og:type" content="website"/>
<meta property="og:title" content="F1 Database"/>
<meta property="og:description" content="Discover the interactive F1 Database, results, stats, history & all about Formula 1"/>
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/b3fb204d-8acb-4923-bd10-470b9af4237d.png?token=HdCsqSWd3mFxvCPg9Yrd0IETwGggeirJg1v9vUhaw9k&height=613&width=1200&expires=33290888846"/>

{/*Twitter Meta Tags*/}
<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="f1-database.vercel.app/"/>
<meta property="twitter:url" content="https://f1-database.vercel.app/"/>
<meta name="twitter:title" content="F1 Database"/>
<meta name="twitter:description" content="Discover the interactive F1 Database, results, stats, history & all about Formula 1"/>
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/b3fb204d-8acb-4923-bd10-470b9af4237d.png?token=HdCsqSWd3mFxvCPg9Yrd0IETwGggeirJg1v9vUhaw9k&height=613&width=1200&expires=33290888846"/>
{/*SEO*/}
<meta name="title" content="F1 Database"/>
<meta name="description" content="Discover the interactive F1 Database, results, stats, history & all about Formula 1"/>
<meta name="keywords" content="f1, formula, 1, formula1, cars, motorsport, wheels, sports, formula 1, pcs"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta name="revisit-after" content="2 days"/>
<meta name="author" content="Chärles"/>
<meta name="google-site-verification" content="" /><meta name="google-site-verification" content="" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
  );
}
//fucking finally
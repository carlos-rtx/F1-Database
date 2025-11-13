import React from "react";
import NavBar from "../components/NavBar.jsx";
//main document structure
export default function F1DbMain() {
  return (
    <>
      <header>
      <NavBar/>
      <article className="header-title">
    <h1>F1 Data <br/>
At max speed</h1>
<p className="header-description">
  Discover the interactive F1 Database, results, stats, history & all about F1
</p>
      <span className="header-button">Learn more</span>
    </article>
    </header>   
    </>
  )
}
//end1
import React from "react";
import NavBar from "../components/NavBar.jsx";
import Header from "../components/MainHeaderSection.jsx";
import Latest from "../components/LatestWidget.jsx"
import History from "../components/MainHistorySection.jsx";
import Technical from "../components/MainTechnicalSection.jsx";
// title
export const metadata = {
  title: "Home | F1 Database",
}
//main document structure
export default function F1DbMain() {
  return (
    <>
      <header>
        <NavBar/>
        <Header/>

      </header>
    </>
  )
}
//end1
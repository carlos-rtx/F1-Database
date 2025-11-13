"use client";
import React, { useState, useEffect } from "react";
import styles from "././NavBar.module.css"

export default function NavBar() {
  // Estado inicial calculado en el primer render, solo si existe window
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 800;
    }
    return false; // default si prerender en servidor
  });
//use effect y resize handler
  useEffect(() => {
    // Solo manejamos resize después del primer render
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ?
      <nav className="nav-main">
      <div className="nav-wrapper">
        <div className="nav-logo-container">
          <img
            src="../public/images/imgbin_b5547cde756547246735f67decd7d946.png"
            alt="logo"
          />
        </div>
        <div className="nav-buttons-container">
          <div className="nav-lang lang-selector">
            <span className="nav-lang-text lang-selector">EN</span>
            <img
              src="../public/images/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="lang icon"
              className="nav-button lang-button"
            />
          </div>
          <img
            src="../public/images/apps_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            alt="menu icon"
            className="nav-button open-button"
          />
        </div>
      </div>
      <ul className="nav-list novisible">
        <li className="nav-element">
          <a className="nav-link-title" href="#">
            Technical
          </a>
          <a className="nav-link-content" href="#">
            Data, analysis and everything about technical F1
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link-title" href="#">
            Search
          </a>
          <a className="nav-link-content" href="#">
            Search anything you want with our AI powered search engine
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link-title" href="#">
            History
          </a>
          <a className="nav-link-content" href="#">
            Dive into the history of Formula One with an interactive timeline
          </a>
        </li>
        <li className="nav-element">
          <a className="nav-link-title" href="#">
            Latest
          </a>
          <a className="nav-link-content" href="#">
            Check the latest news and information
          </a>
        </li>
      </ul>
    </nav> 
      :
      <div>
        
      </div>
      }
    </>
    
  );
}
"use client";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  // Estado inicial calculado en el primer render, solo si existe window
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 800;
    }
    return false; // default si prerender en servidor
  });

  useEffect(() => {
    // Solo manejamos resize después del primer render
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="nav-wrapper">
        {isMobile ? 
          <nav>
      <div className="nav-wrapper">
        <div className="nav-logo-container">
          <img src="/main-assets/imgbin_b5547cde756547246735f67decd7d946.png" alt="logo" />
        </div>
        <div className="nav-buttons-container">
          <div className="nav-lang lang-selector">
            <span className="nav-lang-text lang-selector">EN</span>
            <img src="/main-assets/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="lang icon" className="nav-button lang-button" />
          </div>
          <img src="/main-assets/apps_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="menu icon" className="nav-button open-button" />
        </div>
      </div>
      <ul className="nav-list novisible">
        {[
          { title: "Technical", content: "Data, analysis and everything about technical F1" },
          { title: "Search", content: "Search anything you want with our AI powered search engine" },
          { title: "History", content: "Dive into the history of Formula One with an interactive timeline" },
          { title: "Latest", content: "Check the latest news and information" },
        ].map((item) => (
          <li key={item.title} className="nav-element">
            <a className="nav-link-title" href="#">{item.title}</a>
            <a className="nav-link-content" href="#">{item.content}</a>
          </li>
        ))}
      </ul>
    </nav>
         : 
          <div> {/* desktop layout */}
            <div className="nav-logo-container">
              <img src="/images/imgbin_b5547cde756547246735f67decd7d946.png" alt="logo"/>
            </div>
            <div className="nav-buttons-container">
              {/* tus botones desktop */}
            </div>
          </div>
        }
      </div>
    </nav>
  );
}
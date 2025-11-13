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
          <div> {/* mobile layout */}
            <div className="nav-logo-container">
              <img src="/images/imgbin_b5547cde756547246735f67decd7d946.png" alt="logo"/>
            </div>
            <div className="nav-buttons-container">
              {/* tus botones mobile */}
            </div>
          </div>
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
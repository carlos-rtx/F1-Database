"use client";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  // Inicializamos correctamente el estado usando una función para leer window solo en cliente
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 800;
    }
    return false; // default si se renderiza en servidor
  });

  useEffect(() => {
    // Handler para actualizar el estado cuando se cambia el tamaño de la ventana
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <nav>
          <div className="nav-wrapper">
            <div className="nav-logo-container">
              <img
                src="/images/imgbin_b5547cde756547246735f67decd7d946.png"
                alt="logo"
              />
            </div>

            <div className="nav-buttons-container">
              <div className="nav-lang lang-selector">
                <span className="nav-lang-text lang-selector">EN</span>
                <img
                  src="/images/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="lang icon"
                  className="nav-button lang-button"
                />
              </div>
              <img
                src="/images/apps_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="menu icon"
                className="nav-button open-button"
              />
            </div>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
    </>
  );
}

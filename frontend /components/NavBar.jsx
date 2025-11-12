import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <nav>
          <div className="nav-wrapper">
            <div className="nav-logo-container">
              <img
                src="main-assets/imgbin_b5547cde756547246735f67decd7d946.png"
                alt="logo"
              />
            </div>

            <div className="nav-buttons-container">
              <div className="nav-lang lang-selector">
                <span className="nav-lang-text lang-selector">EN</span>
                <img
                  src="main-assets/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="lang icon"
                  className="nav-button lang-button"
                />
              </div>
              <img
                src="main-assets/apps_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="menu icon"
                className="nav-button open-button"
              />
            </div>
          </div>
        </nav>
      ) : null }
    </>
  );
}
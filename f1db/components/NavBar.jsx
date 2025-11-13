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
      <div>
        
      </div>
      :
      <div>
        
      </div>
      }
    </>
    
  );
}
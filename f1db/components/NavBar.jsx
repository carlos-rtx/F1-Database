"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") return window.innerWidth <= 800;
    return false;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return <div>{/* navbar escritorio */}</div>;

  return (
    <nav className={styles.navMain} style={{ position: "relative" }}>
      <div className={styles.navWrapper}>
        <div className={styles.navLogoContainer}>
          <Image
            src="/images/imgbin_b5547cde756547246735f67decd7d946.png"
            alt="logo"
            fill
            style= {{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.navButtonsContainer}>
          <div className={`${styles.navLang} ${styles.langSelector}`}>
            <span className={`${styles.navLangText} ${styles.langSelector}`}>EN</span>
            <Image
              src="/images/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="lang icon"
              width={24}
              height={24}
              className={`${styles.navButton} ${styles.langButton}`}
            />
          </div>

          <Image
            src="/images/apps_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            alt="menu icon"
            width={24}
            height={24}
            className={`${styles.navButton} ${styles.openButton}`}
          />
        </div>
      </div>

      <ul className={`${styles.navList} ${styles.novisible}`}>
        <li className={styles.navElement}>
          <a className={styles.navLinkTitle} href="#">
            Technical
          </a>
          <a className={styles.navLinkContent} href="#">
            Data, analysis and everything about technical F1
          </a>
        </li>
        <li className={styles.navElement}>
          <a className={styles.navLinkTitle} href="#">
            Search
          </a>
          <a className={styles.navLinkContent} href="#">
            Search anything you want with our AI powered search engine
          </a>
        </li>
        <li className={styles.navElement}>
          <a className={styles.navLinkTitle} href="#">
            History
          </a>
          <a className={styles.navLinkContent} href="#">
            Dive into the history of Formula One with an interactive timeline
          </a>
        </li>
        <li className={styles.navElement}>
          <a className={styles.navLinkTitle} href="#">
            Latest
          </a>
          <a className={styles.navLinkContent} href="#">
            Check the latest news and information
          </a>
        </li>
      </ul>
    </nav>
  );
}
//examen el 25, revisión de libreta el 2 de diciembre, entrega de calificaciones, 3 diciembre
//Química 
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") return window.innerWidth <= 800;
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ activeLang, setActiveLang ] = useState('EN');;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    if (!isMobile) {
      isMenuOpen && setIsMenuOpen(false);
      return (
      <nav className={styles.navMain}>
      <div className={styles.navWrapper}>
        <div className={styles.navLogoContainer}>
          <Link href="./">
            <Image className={styles.navLogoContainerImg}
              src="/images/imgbin_b5547cde756547246735f67decd7d946.png"
              alt="logo"
              width={64}
              height={32}
            />
          </Link> 
        </div>
      <ul className={styles.navListPC}>
        <li className={styles.navElementPC}>
          <Link className={styles.navLinkTitlePC} href="./Technical/">
              Technical
          </Link>
        </li>
        <li className={styles.navElementPC}>
          <Link className={styles.navLinkTitlePC} href="Search/">
            Search
          </Link>
        </li>
        <li className={styles.navElementPC}>
          <Link className={styles.navLinkTitlePC} href="History/">
            History
          </Link>
        </li>
        <li className={styles.navElementPC}>
          <Link className={styles.navLinkTitlePC} href="Latest/">
            Latest
          </Link>
        </li>
        <li className={styles.navElementPC}>
          <div className={`${styles.navLang} ${styles.langSelector}`}>
            <span  onClick={() => setActiveLang(activeLang === 'EN' ? 'ES' : 'EN')} className={`${styles.navLangText} ${styles.langSelector}`}>{activeLang}</span>
            <Image
            onClick={() => setActiveLang(activeLang === 'EN' ? 'ES' : 'EN')}
              src="/images/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="lang icon"
              width={24}
              height={24}
              className={`${styles.navButton} ${styles.langButton}`}
            />
          </div>
        </li>
      </ul>
      </div>
    </nav>
      );
    } 

  return (
    <nav className={styles.navMain}>
      <div className={styles.navWrapper}>
        <div className={styles.navLogoContainer}>
          <Link href="./">
            <Image className={styles.navLogoContainerImg}
              src="/images/imgbin_b5547cde756547246735f67decd7d946.png"
              alt="logo"
              width={64}
              height={32}
            />
          </Link>
     </div>
        
        <div className={styles.navButtonsContainer}>
          <div className={`${styles.navLang} ${styles.langSelector}`}>
            <span  onClick={() => setActiveLang(activeLang === 'EN' ? 'ES' : 'EN')} className={`${styles.navLangText} ${styles.langSelector}`}>{activeLang}</span>
            <Image
            onClick={() => setActiveLang(activeLang === 'EN' ? 'ES' : 'EN')}
              src="/images/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="lang icon"
              width={24}
              height={24}
              className={`${styles.navButton} ${styles.langButton}`}
            />
          </div>
          <Image
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src="/images/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            alt="menu icon"
            width={24}
            height={24}
            className={`${styles.navButton} ${styles.openButton}`}
          />
        </div>
        </div>
      <ul className={`${styles.navList} ${isMenuOpen ? true : styles.novisible}`}>
        <li className={styles.navElement}>
          <Link className={styles.navLinkTitle} href="./Technical/">
              Technical
          </Link>
          <Link className={styles.navLinkContent} href="./Technical/">
            Data, analysis and everything about technical F1
          </Link>
        </li>
        <li className={styles.navElement}>
          <Link className={styles.navLinkTitle} href="Search/">
            Search
          </Link>
          <Link className={styles.navLinkContent} href="Search/">
            Search anything you want with our AI powered search engine
          </Link>
        </li>
        <li className={styles.navElement}>
          <Link className={styles.navLinkTitle} href="History/">
            History
          </Link>
          <Link className={styles.navLinkContent} href="History/">
            Dive into the history of Formula One with an interactive timeline
          </Link>
        </li>
        <li className={styles.navElement}>
          <Link className={styles.navLinkTitle} href="Latest/">
            Latest
          </Link>
          <Link className={styles.navLinkContent} href="Latest/">
            Check the latest news and information
          </Link>
        </li>
      </ul>
    </nav>
  );
}
//examen el 25, revisión de libreta el 2 de diciembre, entrega de calificaciones, 3 diciembre
//Química 
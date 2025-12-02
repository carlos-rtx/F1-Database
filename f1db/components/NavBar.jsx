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
console.log("NavBar loaded")
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
//[examen el 25],revisión de libreta el 2 de diciembre, entrega de calificaciones, 3 diciembre
//Química 
//2 clases, se suspende evaluación 
//E.F
//tecnología entregado
//Álgebra exámen mañana a las 4
//Terminar para hoy [26-Nov-25], Historia, psicología part 1 y química después de dormir 
//Objetivos para manaña {
//Revision de libro y libreta filosofía.
//situación: "dudosa"
//}
//viernes emprendimiento 
//(Thu, Nov 27) => {
//6 en Álgebra, 1 menos
//situación dudosa en Lógica 
//Extra asegurado en Lenguaje
//para mañana terminar trabajo de inglés, emprendimiento
//tecnología entregado, máxima nota:7, predicción: 5, en este contexto, 1 menos
//contacto con la maestra de química, si se puede el examen entonces máxima 7, sin embargo necesito 8, necesito diplomacia 
//Situación actual=> {
//1 menos, 3 slots ocupados, 2 dudosas, comunicación aún no completada, necesito 3 en tutoría, negociación incompleta 
//a partir de hoy se creará un objeto con la situación del día , con save score en el que 1 representa insalvable y 10 es salvado
let CurrentSituation27Nov = {
  Álgebra: {
    State: "Saved!",
    Save_score: 9
  },
  English: { 
    State : "Risky",
    Save_score : 5
    
  },
  Language: { 
    State: "Doomed",
    Save_score: 1
  },
  Logic: {
    State: "Doubtful",
    Save_score: 7
    
  },
  Chemistry: {
    State: "Risky",
    Save_score: 5
  },
  Tutoring:{
    State: "Into a stupid negociation for a 3",
    Save_score: 6
  },
  History: {
    State: "Doubtful but favorable",
    Save_score: 7 //int
  },
  Entrepreneurship: {
    State: "Doomed but savable",
    Save_score: 7
    
  },
  
  Technology: {
    State: "Waiting...",
    Save_score: 8
},
  Psychology: {
    State: "Fucked but not as much as fucking language",
    Save_score: 3
  }
}
//}
//28-11-2025
//Inglés en ordinario, psicológia fuera de la ecuación, salvada, hoy se entrega historia y emprendimiento, con suerte la paso, -1 slot y -1 mas si paso ed.fisica en ordinario, matar filosofía en ordinario if necessary, química en riesgo, pero chance y si se puede salvar aunque sea en ordinario también 
//riesgos potenciales: tutoría y lenguaje que ya está en extra, cada maestro dice un número diferente (4-5-3) de slots, prefiero ir por el mínimo 
//al llegar empezar a completar la libreta de química, en el mejor de los casos puedo negociar el ordinario o el +2 o +3 casi lol;
let CurrentSituation28Nov = {
  Álgebra: {
    State: "Almost saved",
    Save_score: 9
  },
  English: { 
    State : "Ordinary",
    Save_score : 7
    
  },
  Language: { 
    State: "Doomed",
    Save_score: 1
  },
  Logic: {
    State: "jodido",
    Save_score: 7
    
  },
  Chemistry: {
    State: "Risky",
    Save_score: 5
  },
  Tutoring:{
    State: "Into a stupid negociation for a 3",
    Save_score: 2
  },
  History: {
    State: "Doubtful but favorable",
    Save_score: 7 //int
  },
  Entrepreneurship: {
    State: "Doomed but savable",
    Save_score: 7
    
  },
  
  Technology: {
    State: "Waiting...",
    Save_score: 8
},
  Psychology: {
    State: "saved",
    Save_score: 10
  }
}
//30 de noviembre, previa de la última semana 
//it's lit
//endl (first week is over)
//1 de Diciembre de 2025
//video explicando los fundamentos de gimnasia vistos en clase: 
//rodada de hombro, rodada 
//al frente en C, rodada atras den C, parado de omóplatos, y parada de 3 puntos 
//vídeo para el lunes (ordinario ed.física)
//2 de Diciembre 
//Química terminado, a esperar examen 
//esperar calificaciones de Álgebra y Lógica, exámenes de química e inglés 
//no hubo Álgebra
//[anotaciones de tutoría para el viernes 5 de diciembre:
//$150 para el convivio, 60 de cooperación y 80-90 del regalo
//Quién me tocó: Isabella

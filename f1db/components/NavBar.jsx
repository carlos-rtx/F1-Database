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
//$150 para el convivio, 60 de cooperación (2 ordenes de tacos de canasta) y 80-90 del regalo
//Quién me tocó para el intercambio: Isabella]
//examen de inglés retrasado para el siguiente martes (speaking & listening)
//a solo media hora de conocer mi nota de Filosofía 
//no fué media hora, pero medio día y ni alcanzó ptm
//3 de diciembre 
//no hay algebra, aun no entregan calificaciones 
//ya tengo la mitad de mi plan académico en ordinario y extra 
//hoy hay psicologia, ojalá y entregue calificaciones 
//ordinario en filosofía, y química, no se si me alcance, estoy empezando a tener dudas respecto a emprendimiento, necesito ver qué pedo
//ni puta idea de tutoría y ahora me meten un gasto de 150$ por sus mamadas de navidad 
//ya completé la primera parte del ordinario de Inglés, sin embargo los resultados fueron desfavorables, un 6 que me deja con 0 margen
//el martes es el siguiente examen y esto es dolor
//jueves 11 de Diciembre examen ordinario de Lógica y Argumentación (solo primer parcial )
//
let CurrentSituation3Dic = {
  Álgebra: {
    State: "fuck",
    Save_score: 5
  },
  English: { 
    State : "Ordinary",
    Save_score : 9
    
  },
  Language: { 
    State: "Doomed",
    Save_score: 1
  },
  Logic: {
    State: "ordinario",
    Save_score: 1
    
  },
  Chemistry: {
    State: "fucked",
    Save_score: 8
  },
  Tutoring:{
    State: "i dont fucking know",
    Save_score: 2
  },
  History: {
    State: "yes",
    Save_score: 10 //int
  },
  Entrepreneurship: {
    State: "im losing my sanity",
    Save_score: 6
    
  },
  
  Technology: {
    State: "good.",
    Save_score: 10
},
  Psychology: {
    State: "saved",
    Save_score: 10
  }
}
//4 de Diciembre del 2025
//Salvamos Emprendimiento, y con esto el conteo aumenta a: {
//Emprendimiento, Historia, Tecnología y Psicologia 
//}
//Desgraciadamente no todo es bueno, me volví a quedar a un miserable punto de pasar Álgebra, en cuanto a Tutoría TILL FURTHER NOTICE
//Hoy no hay más entregas de notas, quizá pueda convencer a la de Álgebra de subir un puntito, ni tengo ni puta idea de cuando son los ordinarios de Química, necesito investigar la inscripción al Periodo Extraordinario para Lenguaje 
//A 0.13 puntos de pasar Álgebra 
//Martes entregar todas las tareas de la 1 a la 8 en papel, hoja blanca 
//examen ordinario de química el Jueves, los días antes va a dejar actividades 
//para derecho a examen de Álgebra, entregar las tareas de 1 a 8 en hoja blanca para el martes 
//5.87 maldita sea 
//carajo
//5 de Diciembre 
//8 de Diciembre
//Lunes, ordinario de ef hoy, ya hice el vídeo, si todo sale bien, es una menos.
//al llegar hacer las actividades de química y Álgebra, necesarias para el derecho a examen, estudiar inglés y preparar rutina de base para speaking 
//miércoles se estudia lógica y química parte 2
//jueves examenes de lógica y química, viernes libre
//aun no se nada de tutoría 
// no llega el de educación física y ya son las 9:41
//al final no llegó pero me revisó el vídeo 
//Miércoles 10 de Diciembre 
//2 menos, Álgebra e Inglés fuera, el siguiente objetivo es editar el vídeo de Ed fisica y estudiar para mañana que llego a las 9 y salgo a las 12
//va a ser mi día mas complicado y cargado hasta la fecha, toca arreglar mi cuarto, mi reputación y mi higiene
//un 6.9 en Álgebra que hace que esta sea la 2da materia en la que saco SIX SEVEN ALGEBRA IS SO TUFF BOIIIII 😂 ✌️
//estamos al borde de las 400 líneas de código, es buen momento para retomar ese objeto
let Status10Dic = {
  EdFis: {
    State: "Ordinario pero en curso de salvación, debería de caer pronto",
    Save_score: 7
  },
  Álgebra: {
    State: "1 menos",
    Save_score: true
  },
  English: { 
    State : "1 menos",
    Save_score : true
    
  },
  Language: { 
    State: "Esperando la emisión de listas de extraordinario",
    Save_score: false
  },
  Logic: {
    State: "ordinario",
    Save_score: 7
    
  },
  Chemistry: {
    State: "Ordinario",
    Save_score: 7
  },
  Tutoring:{
    State: "I'm not considering ts anymore (ts != this)",
    Save_score: undefined 
  },
  History: {
    State: "1 menos",
    Save_score: true //bool or int
  },
  Entrepreneurship: {
    State: "1 menos",
    Save_score: true
    
  },
  
  Technology: {
    State: "1 menos.",
    Save_score: true
},
  Psychology: {
    State: "1 menos",
    Save_score: true
  }
}
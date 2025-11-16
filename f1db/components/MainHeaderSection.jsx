import React from 'react';
import styles from './MainHeaderSection.module.css';


export default function HeadSection() {
  return (
    <header className={styles.mainHeaderSection}>
        <article className={styles.headerTitle}>
   <h1 className={styles.headerTitleH1}>F1 Data <br />
At max speed</h1>
<p className={styles.headerDescription}>
  Discover the interactive F1 Database, results, stats, history & all about F1
</p>
 </article>
 <article className={styles.headerLatestWidget}>
   <div className={styles.widgetWrapper}>
     <img src="/images/image(9).jpeg" alt="baku city citcuit" className={styles.widgetImage} />
    <div className={styles.widgetContent}>
      <div className={styles.widgetS1}>
       <span className={styles.widgetS1Title}>
         LATEST
       </span>
       <div className={styles.widgetContentContainer}>
         <p className={styles.widgetS1Content}>
         2025 Azerbaijan Grand Prix </p>
       <p className={styles.widgetS1Content}>
         Baku City Circuit </p>
       </div>
    </div>
   <div className={`${styles.widgetS1} ${styles.widgetS2} ${styles.novisible}`}>
       <span className={styles.widgetS1Title}>
         PODIUM
       </span>
       <p className={styles.widgetS1Content}>
         2025 Azerbaijan Grand Prix </p>
       <p className={styles.widgetS1Content}>
         Baku City Circuit </p> 
    </div>
   </div>
   </div>
    </article>
    </header>
  );
}
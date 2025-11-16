import React from 'react';
import styles from './MainHeaderSection.module.css';
import LatestWidget from './LatestWidget';

export default function HeadSection() {
  return (
    <header className={styles.mainHeaderSection}>
        <div className={styles.headerOverlay}>
        <article className={styles.headerTitle}>
   <h1 className={styles.headerTitleH1}>F1 Data <br />
At max speed</h1>
<p className={styles.headerDescription}>
  Discover the interactive F1 Database, results, stats, history & all about Formula 1
</p>
</article>
</div>
<LatestWidget />
</header>      
  );
}
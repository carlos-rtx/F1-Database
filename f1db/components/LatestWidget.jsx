import Image from 'next/image';
import styles from './LatestWidget.module.css';


export default function LatestWidget() {
  return (
    <div className={styles.widgetWrapper}>
      <Image
        src="/images/images (9).jpeg"
        alt="baku city circuit"
        className={styles.widgetImage}
        width={300}
        height={200}
      />
      <div className={styles.widgetContent}>
        <div className={styles.widgetS1}>
          <span className={styles.widgetS1Title}>LATEST</span>
          <div className={styles.widgetContentContainer}>
            <p className={styles.widgetS1Content}>2025 Azerbaijan Grand Prix</p>
            <p className={styles.widgetS1Content}>Baku City Circuit</p>
          </div>
        </div>
        <div
          className={`${styles.widgetS1} ${styles.widgetS2} ${styles.novisible}`}
        >
          <span className={styles.widgetS1Title}>PODIUM</span>
          <p className={styles.widgetS1Content}>2025 Azerbaijan Grand Prix</p>
          <p className={styles.widgetS1Content}>Baku City Circuit</p>
        </div>
      </div>
    </div>
  );
}
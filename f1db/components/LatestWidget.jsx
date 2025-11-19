import Image from 'next/image';
import styles from './LatestWidget.module.css';


export default function LatestWidget() {
  return (
    <div className={styles.widgetWrapper}>
    <div className={styles.widget}>
      <div className={styles.widgetImageContainer}>
      <Image
        src="/images/images (9).jpeg"
        alt="baku city circuit"
        className={styles.widgetImage}
        width={300}
        height={200}
      />
        <div className={styles.innerWidgetContent}>
          <span className={styles.widgetS1Title}>LATEST</span>
          <div className={styles.widgetContentContainer}>
            <p className={styles.widgetS1Content}>2025 Azerbaijan Grand Prix</p>
            <p className={styles.widgetS1Content}>Baku City Circuit</p>
          </div>
        </div>
        </div>
        <div
          className={`${styles.innerWidgetContent} ${styles.widgetS2} ${styles.novisible}`}
        >
          <span className={styles.widgetS1Title}>PODIUM</span>
          <ul >
            <li className={styles.widgetS1Content}>
              <Image className={styles.navLogoContainerImg}
              src="/images/Ellipse 1.png"
              alt="Max Verstappen"
              width={21}
              height={21}
            />
            <span>Max Verstappen</span>
            <span>Red Bull Racing</span>
            </li>
            <li className={styles.widgetS1Content}>
              <Image className={styles.navLogoContainerImg}
              src="/images/Ellipse 2.png"
              alt="Lando Norris"
              width={21}
              height={21}
            />
            <span>Lando Norris</span>
            <span>McLaren</span>
            </li>
            <li className={styles.widgetS1Content}>
              <Image className={styles.navLogoContainerImg}
              src="/images/Ellipse 3.png"
              alt="Oscar Piastri"
              width={21}
              height={21}
            />
            <span>McLaren</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
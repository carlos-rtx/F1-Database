import React from 'react';
import './fonts.css';
import './main.css';

export default function F1Database() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <title>F1 Database</title>
      </head>

      <body>
        <header>
          <nav>
            <div className="nav-wrapper">
              <div className="nav-logo-container">
                <img
                  src="/main-assets/imgbin_b5547cde756547246735f67decd7d946.png"
                  alt="logo"
                />
              </div>
              <div className="nav-buttons-container">
                <div className="nav-lang lang-selector">
                  <span className="nav-lang-text lang-selector">EN</span>
                  <img
                    src="/main-assets/language_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="lang icon"
                    className="nav-button lang-button"
                  />
                </div>
                <img
                  src="/main-assets/apps_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="menu icon"
                  className="nav-button open-button"
                />
              </div>
            </div>

            <ul className="nav-list novisible">
              <li className="nav-element">
                <a className="nav-link-title" href="#">
                  Technical
                </a>
                <a className="nav-link-content" href="#">
                  Data, analysis and everything about technical F1
                </a>
              </li>
              <li className="nav-element">
                <a className="nav-link-title" href="#">
                  Search
                </a>
                <a className="nav-link-content" href="#">
                  Search anything you want with our AI powered search engine
                </a>
              </li>
              <li className="nav-element">
                <a className="nav-link-title" href="#">
                  History
                </a>
                <a className="nav-link-content" href="#">
                  Dive into the history of Formula One with an interactive
                  timeline
                </a>
              </li>
              <li className="nav-element">
                <a className="nav-link-title" href="#">
                  Latest
                </a>
                <a className="nav-link-content" href="#">
                  Check the latest news and information
                </a>
              </li>
            </ul>
          </nav>

          <article className="header-title">
            <h1>
              <pre>F1 Data{'\n'}At max speed</pre>
            </h1>
            <p className="header-description">
              Discover the interactive F1 Database, results, stats, history & all
              about F1
            </p>
          </article>

          <article className="header-latest-widget">
            <div className="widget-wrapper">
              <img
                src="/main-assets/images (9).jpeg"
                alt="baku city circuit"
                className="widget-image"
              />
              <div className="widget-content">
                <div className="widget-s1">
                  <span className="widget-s1-title">LATEST</span>
                  <div className="widget-content-container">
                    <p className="widget-s1-content">
                      2025 Azerbaijan Grand Prix
                    </p>
                    <p className="widget-s1-content">Baku City Circuit</p>
                  </div>
                </div>
                {/* 
                <div className="widget-s1 widget-s2 novisible">
                  <span className="widget-s1-title">PODIUM</span>
                  <p className="widget-s1-content">2025 Azerbaijan Grand Prix</p>
                  <p className="widget-s1-content">Baku City Circuit</p>
                </div>
                */}
              </div>
            </div>
          </article>
        </header>

        <section className="latest-section">
          <article className="latest-description-container">
            <div className="latest-title-container">
              <h2 className="latest-title">Updated,</h2>
              <h2 className="latest-title">Instantly</h2>
            </div>
            <p className="latest-description">
              Everything you need to know about F1, in the same place updated
              with the speed of a W11 on qualy lap. And the best part, all for
              free, no login needed. <br />
              Take a look:
            </p>
            <div className="latest-buttons">
              <div className="latest-button">
                <span className="latest-button-text">Drivers</span>
              </div>
              <div className="latest-button">
                <span className="latest-button-text">Teams</span>
              </div>
            </div>
          </article>

          <article className="latest-standings-component">
            <h2 className="standings-title">2025 Azerbaijan Grand Prix</h2>
            <h3 className="standings-subtitle">Podium</h3>
            <ul className="standings-list">
              <li className="standings-list-item">
                <span className="standings-number">1</span>
                <img
                  src="/main-assets/images (10).jpeg"
                  alt=""
                  className="standings-driver-image"
                />
                <span className="standings-driver-name">Max Verstappen</span>
                <span className="standing-points">25</span>
              </li>
              <li className="standings-list-item">
                <span className="standings-number">2</span>
                <img
                  src="/main-assets/images (10).jpeg"
                  alt="George Russell"
                  className="standings-driver-image"
                />
                <span className="standings-driver-name">George Russell</span>
                <span className="standing-points">18</span>
              </li>
              <li className="standings-list-item">
                <span className="standings-number">3</span>
                <img
                  src="/main-assets/images (10).jpeg"
                  alt=""
                  className="standings-driver-image"
                />
                <span className="standings-driver-name">Carlos Sainz</span>
                <span className="standing-points">15</span>
              </li>
            </ul>
          </article>
        </section>

        <section className="history-section">
          <div className="history-introduction">
            <h2 className="history-title">Relive History</h2>
          </div>
        </section>
      </body>
    </>
  );
}
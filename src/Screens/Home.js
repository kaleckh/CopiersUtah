import React from "react";
import Header from "../Components/Header";
import Logo from "../Photos/logo.png";
import styles from "../Screens/Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <img className={styles.logo} src={Logo} alt="" />
          <div className={styles.columnContainer}>
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
            <div className={styles.infoSmall}>info@copiersutah.com</div>
          </div>
        </div>
      </div>

      <Header />
      <div className={styles.secondSection}>
        <div className={styles.row}>
          <div>Left Arrow</div>
          <div className={styles.photoBox}>Box</div>
          <div>Right Arrow</div>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.smaller}>
          <div className={styles.paragraphContainer}>
            <div className={styles.paragraph}>
              Our Guarantee: We stand by our copiers, we service most makes &
              models, we have factory trained technicians, financing available,
              rent-to-own, no credit checks, leases available and maintenance
              agreements.
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Request a quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

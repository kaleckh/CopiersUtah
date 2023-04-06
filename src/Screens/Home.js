import React from "react";
import Header from "../Components/Header";
import Logo from "../Photos/logo.png";
import Menu from "../Photos/menu.png";
import Repair from "../Photos/repair.jpg";
import styles from "../Screens/Home.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <img className={styles.logo} src={Logo} alt="" />
          <div className={styles.titleContainer}></div>
          <div className={styles.menuRow}>
            <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
          </div>
        </div>
      </div>
      <Header />
      <div className={styles.secondSection}>
        <div
          onClick={() => {
            navigate("/buy");
          }}
          className={styles.shadeBig}
          style={{ height: "75%", marginTop: "24px" }}
        >
          <div className={styles.parent}>
            <div className={styles.woman}></div>
            <div className={styles.padding}>
              <div className={styles.centerLarge}>Buy Or Lease A Copier</div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "93%",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div className={styles.row}>
            <div
              onClick={() => {
                navigate("/fix");
              }}
              className={styles.shade}
            >
              <div className={styles.parent}>
                <div className={styles.repair}></div>
                
                  <div className={styles.center}>Copier Repair</div>
                
              </div>
            </div>
            <div className={styles.shade}>
              <div className={styles.parent}>
                <div className={styles.toner}></div>
                <div className={styles.overlay}></div>
                <div className={styles.center}>Buy Toner</div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.shade}>
              <div className={styles.parent}>
                <div className={styles.itWork}></div>
                <div className={styles.overlay}></div>
                <div className={styles.center}>IT Work</div>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/shortTerm");
              }}
              className={styles.shade}
            >
              <div className={styles.parent}>
                <div className={styles.construction}></div>
                <div className={styles.overlay}></div>
                <div className={styles.center}>Short Term Rental</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

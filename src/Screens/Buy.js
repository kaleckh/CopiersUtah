import React from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Logo from "../Photos/logo.png";
import Menu from "../Photos/menu.png";
import Repair from "../Photos/repair.jpg";
import styles from "../Screens/Buy.module.css";
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
        <div className={styles.woman}></div>
        <Form title={"Get A Quote"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

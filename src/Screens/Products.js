import React from "react";
import Header from "../Components/Header";
import Logo from "../Photos/logo.png";
import styles from "../Screens/Products.module.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
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
      <div className={styles.color}>
        This is where we will show the products
      </div>
    </div>
  );
};

export default Products;

import React, { useRef } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Logo from "../Photos/logo.png";
import Lexmark from "../Photos/Lexmark.png";
import Kycotera from "../Photos/Kycotera.png";
import Konika from "../Photos/Konika.png";
import Epson from "../Photos/Epson.png";
import styles from "../Screens/Toner.module.css";
import { useNavigate } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
const Toner = () => {
  const navigate = useNavigate();
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };
  return (
    <div className={styles.main}>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <img className={styles.logo} src={Logo} alt="" />
          <div className={styles.titleContainer} />
          <div className={styles.columnContainer}>
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <div
        style={{
          height: "80%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div className={styles.color}>Our Toner Brands</div>
        <div className={styles.centerLine}>
          <div className={styles.line} />
        </div>
        <div className={styles.row}>
          <img src={Lexmark} alt="" />
          <img style={{ height: "65px" }} src={Kycotera} alt="" />
          <img onClick={() => {navigate('/konikatoner')}} src={Konika} alt="" />
          <img style={{ height: "65px" }} src={Epson} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Toner;

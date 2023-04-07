import React from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Logo from "../Photos/logo.png";
import Menu from "../Photos/menu.png";
import Repair from "../Photos/repair.jpg";
import styles from "../Screens/Fix.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Fix = () => {
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
        <div className={styles.container}>
          <div className={styles.black}>Schedule A Maintanance Call!</div>
          <div className={styles.space}>
            <div className={styles.number}>1</div>

            <input
              placeholder="First Name"
              type="text"
              name=""
              id=""
              required={true}
            />
            <input placeholder="Last Name" type="text" name="" id="" />
          </div>

          <input
            className={styles.inputSingle}
            type="tel"
            name="telphone"
            placeholder="Phone Number"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            maxlength="12"
            title="Ten digits code"
            required
          />

          <input
            className={styles.inputSingle}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.inputSingle}
            type="text"
            placeholder="Street Address"
          />
          <div className={styles.space}>
            <input type="text" placeholder="state" />
            <input type="text" placeholder="city" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.numberContainer}>
            <div className={styles.number}>2</div>
            <div className={styles.light}>Extra Information</div>
          </div>
          <select className={styles.selected} id="year">
            <option value="hide">Best time to call</option>
            <option value="2010">Morning</option>
            <option value="2010">Afternoon</option>
            <option value="2010">Evening</option>
            
          </select>
          <input type="date" />
          <textarea
            className={styles.inputSingle}
            type="text"
            name=""
            id=""
            placeholder="What type of service?"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fix;
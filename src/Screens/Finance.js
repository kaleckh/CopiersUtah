import React, { useState } from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Logo from "../Photos/logo.png";
import Menu from "../Photos/menu.png";
import Repair from "../Photos/repair.jpg";
import styles from "../Screens/Finance.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Finance = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <img className={styles.logo} src={Logo} alt="" />
          <div className={styles.titleContainer}></div>
          <div className={styles.columnContainer}>
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
            <div className={styles.infoSmall}>info@copiersutah.com</div>
          </div>
        </div>
      </div>
      <Header />
      <div id="quote" className={styles.secondSection}>
        <div className={styles.eighty}>
          <div className={styles.title}>
            Copiers Utah offers short and long term copier rentals.
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.woman}></div>
            </div>
            {toggle ? (
              <div className={styles.container}>
                <div>
                  <div>x</div>
                </div>
                <div className={styles.black}>Get Your Quote</div>

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
                  <option value="hide">Price Range</option>
                  <option value="2010">1,000 - 1,999</option>
                  <option value="2010">3,000 - 4,999</option>
                  <option value="2010">5,000 - 9,999</option>
                  <option value="2010">10,000 - 14,999</option>
                  <option value="2010">15,000 - 19,999</option>
                </select>
                <select className={styles.selected} id="year">
                  <option value="hide">How Soon Will You Purchase</option>
                  <option value="2010">ASAP</option>
                  <option value="2011">Next Week</option>
                  <option value="2012">A Month</option>
                  <option value="2013">Other</option>
                </select>
                <input
                  className={styles.inputSingle}
                  type="text"
                  name=""
                  id=""
                  placeholder="Anything Else?"
                />
              </div>
            ) : (
              <div className={styles.center}>
                <div className={styles.titleBig}>Financing Made Easy</div>
                <div className={styles.paragraph}>
                  We know how it can be stressful finding a printer. That's why
                  we've made it easier than ever to find your next one and get
                  you all your information on it
                </div>
                <button
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className={styles.button}
                >
                  Get Your Terms
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.centerLine}>
        <div className={styles.line}></div>
      </div>

      <div className={styles.thirdSection}>
        <div className={styles.title} style={{ fontWeight: "600" }}>
          Why Choose Copiers Utah?
        </div>
        <div className={styles.optionContainer}>
          <div className={styles.optionsContainer}>
            <div className={styles.smallTitle}>Rent To Own</div>
            <div className={styles.info}>
              We offer a second to none rent to own system! Ask our
              representative when you request a quote!
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.smallTitle}>Easy Leases</div>
            <div className={styles.info}>
              We offer a second to none rent to own system! Ask our
              representative when you request a quote!
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.smallTitle}>Hastle Free</div>
            <div className={styles.info}>
              We offer a second to none rent to own system! Ask our
              representative when you request a quote!
            </div>
          </div>
        </div>
        <a href="#quote">
          <button onClick={() => {setToggle(!toggle)}} className={styles.button}>Get your terms</button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Finance;

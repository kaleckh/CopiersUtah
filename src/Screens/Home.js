import React, { useRef } from "react";
import Header from "../Components/Header";
import Logo from "../Photos/logo.png";

import { Quote } from "../SVG/Quote.js";

import styles from "../Screens/Home.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Home = () => {
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
      <div className={styles.secondSection}>
        <div className={styles.flex}>
          <div
            onClick={() => {
              navigate("/buy");
            }}
            className={styles.shadeBig}
            style={{ height: "75%", marginTop: "24px" }}
          >
            <div className={styles.parent}>
              <div className={styles.woman} />
              <div className={styles.padding}>
                <div className={styles.centerLarge}>Buy Or Lease A Copier</div>
              </div>
            </div>
          </div>
          <div className={styles.somethingContainer}>
            <div className={styles.row}>
              <div
                onClick={() => {
                  navigate("/fix");
                }}
                className={styles.shade}
              >
                <div className={styles.parent}>
                  <div className={styles.repair} />

                  <div className={styles.center}>Copier Repair</div>
                </div>
              </div>
              <div
                onClick={() => {
                  navigate("/buytoner");
                }}
                className={styles.shade}
              >
                <div className={styles.parent}>
                  <div className={styles.toner} />
                  <div className={styles.overlay} />
                  <div className={styles.center}>Buy Toner</div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div
                onClick={() => {
                  navigate("/itWork");
                }}
                className={styles.shade}
              >
                <div className={styles.parent}>
                  <div className={styles.itWork} />
                  <div className={styles.overlay} />
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
                  <div className={styles.construction} />
                  <div className={styles.overlay} />
                  <div className={styles.center}>Short Term Rental</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.needSpace}>
          <div className={styles.middle}>
            <div className={styles.reviewBig}>Recent Google Reviews...</div>
          </div>
          <div className={styles.reviewRow}>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  People there are always fantastic to work with. I recommend
                  them to everyone
                </div>
              </div>
              <div className={styles.smallParagraph}>2 Months Ago</div>
              <div className={styles.title}>Tara Bennets</div>
            </div>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  Great company to work with. They have friendly staff and were
                  able to get me up and running within a few days.
                </div>
              </div>
              <div className={styles.smallParagraph}>2 Months Ago</div>
              <div className={styles.title}>Kyle Francis</div>
            </div>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  This company is the best to do work with. They are very
                  friendly and very helpful. I will be recommending them to
                  everyone. I will never go anywhere els
                </div>
              </div>
              <div className={styles.smallParagraph}>2 Months Ago</div>
              <div className={styles.title}>Carley Ward</div>
            </div>
          </div>
          <div className={styles.centerReview}>
            <a href="https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9827469,13z/data=!4m12!1m2!2m1!1scopiers+utah!3m8!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!15sCgxjb3BpZXJzIHV0YWhaDiIMY29waWVycyB1dGFokgEVY29waWVyX3JlcGFpcl9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xTjJaeE0xTjNFQUXgAQA!16s%2Fg%2F1hc90lr04">
              <button className={styles.button}>See All Google Reviews</button>
            </a>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

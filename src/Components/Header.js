import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();

  return (
    <header className={styles.contactHeader}>
      <div className={styles.headerContainer}>
        <div
          className={styles.headerPieces}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className={styles.headerPieces}
          onClick={() => {
            navigate("/products");
          }}
        >
          Product Line
        </div>
        <div
          className={styles.headerPieces}
          onClick={() => navigate("/services")}
        >
          Service & Maintenance
        </div>

        <div
          onClick={() => {
            navigate("/contact");
          }}
          className={styles.headerPieces}
        >
          Contact Us
        </div>
      </div>
    </header>
  );
}

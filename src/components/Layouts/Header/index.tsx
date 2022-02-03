import React from "react";
import styles from "./header.module.scss";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h1>
          <span>Dream</span>
          <span>Vacation</span>
          <p>lets start to fulfile our dream</p>
        </h1>
      </div>
    </div>
  );
};

export default Header;

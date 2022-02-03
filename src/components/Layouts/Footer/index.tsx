import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Copyright}>
        <h2>copyright rafi 2022</h2>
      </div>
    </div>
  );
};

export default Footer;

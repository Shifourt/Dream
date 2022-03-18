import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div data-aos="fade-up" className={styles.footerCap}></div>
      <div className={styles.content}>
        <div className={styles.Section}>
          <div className={styles.innerContent}>
            <ul>
              <li>
                <a href="">privacy</a>
              </li>
              <li>
                <a href="">terms & conditions</a>
              </li>
              <li>
                <a href="">ad choices</a>
              </li>
            </ul>
            <a
              className={styles.copyright}
              href="https://www.facebook.com/danted30"
            >
              &copy;2022 RAFI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

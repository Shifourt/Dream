import {
  faFacebookF,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <div className={styles.Social}>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>Facebook</div>
                <span>
                  <div className={styles.facebook}>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>Twitter</div>
                <span>
                  <div className={styles.twitter}>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>Instagram</div>
                <span>
                  <div className={styles.instagram}>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>Github</div>
                <span>
                  <div className={styles.github}>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>YouTube</div>
                <span>
                  <div className={styles.youtube}>
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

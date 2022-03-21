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
import Image from "next/image";
import React, { useEffect } from "react";
import House from "../../../images/house.png";
import Trees from "../../../images/trees.png";
import TreesTwo from "../../../images/trees2.png";
import styles from "./Footer.module.scss";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.Wrapper}>
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
                    <a href="https://www.facebook.com/danted30">
                      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>Twitter</div>
                <span>
                  <div className={styles.twitter}>
                    <a href="">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>Instagram</div>
                <span>
                  <div className={styles.instagram}>
                    <a href="">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>Github</div>
                <span>
                  <div className={styles.github}>
                    <a href="https://github.com/Shifourt">
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                  </div>
                </span>
              </div>
              <div className={styles.Icons}>
                <div className={styles.tooltip}>YouTube</div>
                <span>
                  <div className={styles.youtube}>
                    <a href="https://www.youtube.com/channel/UCcv9iUiaQm-f-gc97A9takw">
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.House}>
          <Image src={House} alt={"/"} />
        </div>
        <div className={styles.Trees}>
          <div className={styles.Tree}>
            <Image src={Trees} alt={"/"} />
          </div>
          <div className={styles.Tree}>
            <Image src={Trees} alt={"/"} />
          </div>
          <div className={styles.Tree}>
            <Image src={TreesTwo} alt={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

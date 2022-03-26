import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Seal from "../../../images/seal.png";
import SignIn from "../../../images/SIGNIN.png";
import Umbrella from "../../../images/sun-umbrella.png";
import styles from "./Sign.module.scss";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(false);
  const [info, setInfo] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleState = () => {
    setState(!state);
  };
  const toggleInfo = () => {
    setInfo(!info);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div
        onClick={toggleModal}
        className={`${styles.SignIn} ${modal ? styles.active : ""}`}
      >
        <Image src={SignIn} alt={"/"} />
      </div>

      {modal && (
        <div className={styles.Popup}>
          <div onClick={toggleModal} className={styles.Overlay}></div>
          <div className={styles.popupContainer}>
            <div
              className={`${styles.Envelope} ${state ? styles.activeForm : ""}`}
            >
              <div onClick={toggleState} className={styles.stamp}>
                <Image src={Seal} alt={"/"} />
              </div>
              <div className={styles.envelopeCap}></div>
              <div className={styles.letterForm}>
                <div className={styles.letterTitle}>
                  <p onClick={toggleState} className={styles.close}>
                    X
                  </p>
                  <div className={styles.Umbrella}>
                    <Image src={Umbrella} alt={"/"} />
                  </div>
                  <h2>We are always ready to serve you</h2>
                </div>
              </div>

              <div
                className={`${styles.contactForm} ${
                  info ? styles.activeInfo : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="username"
                  className={styles.formControl}
                />
                <input
                  type="password"
                  placeholder="password"
                  className={styles.formControl}
                />
                <div className={styles.successful}>
                  <p>login successful</p>
                </div>
                <a onClick={toggleInfo} className={styles.Btn}>
                  Sign In
                </a>
                <a onClick={toggleInfo} className={styles.BtnTwo}>
                  logout
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;

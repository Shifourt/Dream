import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SignIn from "../../../images/envelope.png";
import Seal from "../../../images/seal.png";
import Umbrella from "../../../images/sun-umbrella.png";
import styles from "./Sign.module.scss";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
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
            <div className={styles.Envelope}>
              <div className={styles.stamp}>
                <Image src={Seal} alt={"/"} />
              </div>
              <div className={styles.envelopeCap}></div>
              <div className={styles.letterForm}>
                <div className={styles.letterTitle}>
                  <div className={styles.Umbrella}>
                    <Image src={Umbrella} alt={"/"} />
                  </div>
                  <h2>We are always ready to serve you</h2>
                </div>
                <div className={styles.contactForm}>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className={styles.formControl}
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className={styles.formControl}
                  />
                </div>
              </div>
              <button className={styles.Btn}>send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;

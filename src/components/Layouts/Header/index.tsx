import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeaderLogo from "../../../images/sun-umbrella2.png";
import styles from "./header.module.scss";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [active, setActive] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div data-aos="flip-up" className={styles.Logo}>
        <div className={styles.image}>
          <Image src={HeaderLogo} alt={"/"} />
        </div>
        <h3 className={styles.heading}>Dream vacation</h3>
      </div>
      <div className={styles.hamburgers} onClick={() => setActive(!active)}>
        <div
          className={active ? styles.activeHamburger : styles.hamburger}
        ></div>
      </div>
      <div className={active ? styles.activeSideNav : styles.sideNav}>
        <ul className={styles.navLinks}>
          <li data-aos="fade-right">
            <a href={"/"}>Home</a>
          </li>
          <li data-aos="fade-right">
            <a href={"/"}>About Us</a>
          </li>
          <li data-aos="flip-down">
            <a className={styles.another} href={"/Tour"}>
              Lets Go
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

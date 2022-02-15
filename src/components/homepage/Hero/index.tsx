import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import Cover from "../../../images/world.png";
import styles from "./hero.module.scss";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.herocontainer}>
      <div className={styles.hero}>
        <div className={styles.headline}>
          <h2 data-aos="fade-in">
            Travel is the only thing you buy that makes you richer
          </h2>
          <div data-aos="fade-left">
            <a href={"/"}>Lets Go</a>
          </div>
        </div>
        <div className={styles.OverView}>
          <div className={styles.globle}>
            <Image className={styles.image} src={Cover} alt={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

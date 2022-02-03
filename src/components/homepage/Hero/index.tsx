import React from "react";
import styles from "./hero.module.scss";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.contentcontainer}></div>
    </div>
  );
};

export default Hero;

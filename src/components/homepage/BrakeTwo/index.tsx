import Image from "next/image";
import React from "react";
import City from "../../../images/City.png";
import Car from "../../../images/Daco_4333372.png";
import styles from "./BrakeTwo.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  return (
    <div className={styles.aboutContant}>
      <h2>Dreams Gives Us Hope</h2>
      <div className={styles.City}>
        <Image src={City} alt={"/"} />
      </div>
      <div className={styles.Car}>
        <Image src={Car} alt={"/"} />
      </div>
      <div className={styles.road}>
        <div className={styles.lines}></div>
      </div>
    </div>
  );
};

export default HomeFeatured;

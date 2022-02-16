import Image from "next/image";
import React from "react";
import Airplane from "../../../images/airplane.png";
import Cloud from "../../../images/Cloud.png";
import styles from "./Brake.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  return (
    <div className={styles.aboutContant}>
      <div className={styles.Cloud1}>
        <Image src={Cloud} alt={"/"} />
      </div>
      <div className={styles.Cloud2}>
        <Image src={Cloud} alt={"/"} />
      </div>
      <div className={styles.Cloud3}>
        <Image src={Cloud} alt={"/"} />
      </div>
      <div className={styles.Cloud4}>
        <Image src={Cloud} alt={"/"} />
      </div>

      <div className={styles.Moving}>
        <div className={styles.Plane}>
          <Image src={Airplane} alt={"/"} />
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;

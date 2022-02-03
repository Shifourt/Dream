import Image from "next/image";
import Link from "next/link";
import React from "react";
import RFamily from "../../../images/ReCharge-Family.jpg";
import styles from "./HomeFeatured.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  return (
    <div className={styles.HomeFeatured}>
      <div className={styles.left}>
        <Image src={RFamily} alt="ReCharge-Family" />
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          <h2>Get to Know the ReCharge Family</h2>
          <p>
            ReCharge is an Internet of Things (IoT) company with one simple
            goal: to help people fulfill their needs easier through
            Internet-based vending machine technologies. We deliver accessible
            and affordable powerbank rental services to free you from your low
            battery worries.
          </p>

          <Link href="/">
            <a className={styles.btn}>Learn more</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;

import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "../../../images/sun-umbrella2.png";
import styles from "./HomeFeatured.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.aboutContant}>
      <h1 className={styles.header}>about us</h1>
      <div className={styles.Section}>
        <div data-aos="fade-in" className={styles.img}>
          <div className={styles.Text}>
            <div className={styles.image}>
              <Image src={Logo} alt={"/"} />
            </div>
            <p>
              We just want you to get out of this robotic world and feel free!!
            </p>
            <div>
              <a href={"/"}>Lets Go</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;

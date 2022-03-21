import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import Beach from "../../../images/beach.png";
import Fence from "../../../images/fence.png";
import Grass from "../../../images/grass2.png";
import People from "../../../images/people.png";
import PeopleTwo from "../../../images/people2.png";
import Logo from "../../../images/sun-umbrella2.png";
import Water from "../../../images/water.png";
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
      <ul className={styles.grass}>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Grass} alt={"/"} />
        </li>
        <li>
          <Image src={Fence} alt={"/"} />
        </li>
      </ul>
      <div className={styles.beach}>
        <h2 data-aos="fade-in">all you need is a break</h2>
        <div className={styles.sand}>
          <Image src={Beach} alt={"/"} />
        </div>
        <div className={styles.people}>
          <Image src={People} alt={"/"} />
        </div>
        <div className={styles.peopleTwo}>
          <Image src={PeopleTwo} alt={"/"} />
        </div>
      </div>
      <div className={styles.water}>
        <Image src={Water} alt={"/"} />
      </div>
    </div>
  );
};

export default HomeFeatured;

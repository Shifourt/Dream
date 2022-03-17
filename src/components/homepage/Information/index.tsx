import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import Island from "../../../images/1.jpg";
import People from "../../../images/inWater.png";
import Ship from "../../../images/ship.png";
import styles from "./information.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.aboutContant}>
      <div className={styles.People}>
        <Image src={People} alt={"/"} />
      </div>
      <div className={styles.moving}>
        <div className={styles.ships}>
          <Image src={Ship} alt={"/"} />
        </div>
      </div>
      <div className={styles.island}>
        <Image src={Island} alt={"/"} />
      </div>
      <div className={styles.texts}>
        <div data-aos="flip-up" className={styles.text}>
          <h2>Plans</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium sequi labore ex doloremque ab, odit facilis aperiam sit
            eos autem explicabo pariatur exercitationem assumenda eius amet vel
            id perferendis rem perspiciatis ad quas obcaecati nobis. Corrupti
            eum iste id repellendus, dolore aliquid itaque omnis, ipsam pariatur
            vero quaerat distinctio beatae quod accusantium exercitationem esse.
            Natus, tempore. Sit impedit earum ipsum!
          </p>
        </div>
        <div data-aos="flip-up" className={styles.text}>
          <h2>Education</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            fugit dolores mollitia similique magni id blanditiis, nobis fuga
            dolore ipsum recusandae eos ducimus? Est nulla eos culpa incidunt,
            autem ipsam.
          </p>
        </div>
        <div data-aos="flip-down" className={styles.text}>
          <h2>Safty</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in
            pariatur dolorum aut assumenda praesentium laborum ipsam a dolore
            maiores quod cumque aliquam, soluta velit repellat minima unde. Ea
            enim tempora architecto nisi itaque. Excepturi dolorem vitae
            mollitia voluptate at?
          </p>
        </div>
        <div data-aos="flip-down" className={styles.text}>
          <h2>Population</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            labore?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;

import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import Beach from "../../../images/beach2.png";
import Boat from "../../../images/boat.png";
import Cold from "../../../images/cold.png";
import Cooking from "../../../images/cooking.png";
import Farmer from "../../../images/Farmer.png";
import Fever from "../../../images/fever.png";
import Aid from "../../../images/first-aid-kit.png";
import Flight from "../../../images/flight.png";
import Medical from "../../../images/medical-mask.png";
import Washing from "../../../images/washing-hand.png";
import styles from "./Terms.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.aboutContant}>
      <div className={styles.seaside}>
        <h2>terms & conditions</h2>
        <div className={styles.boat}>
          <Image src={Boat} alt={"/"} />
        </div>
        <div className="background">
          <div className={styles.beach}>
            <Image src={Beach} alt={"/"} />
          </div>
          <div className={styles.beach}>
            <Image src={Farmer} alt={"/"} />
          </div>
          <div className={styles.beach}>
            <Image src={Beach} alt={"/"} />
          </div>
          <div className={styles.beach}>
            <Image src={Beach} alt={"/"} />
          </div>
          <div className={styles.beach}>
            <Image src={Beach} alt={"/"} />
          </div>
        </div>
      </div>

      <div className={styles.termsList}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.content}>
              <div className={styles.img}>
                <Image src={Washing} alt={"/"} />
              </div>
              <p>
                wash hands with soap and water after touching animal and animal
                products.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <div className={styles.img}>
                <Image src={Cold} alt={"/"} />
              </div>
              <p>
                when coughing and sneezing cover mouth and nose with flexed
                elbow or tissue.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <div className={styles.img}>
                <Image src={Flight} alt={"/"} />
              </div>
              <p>avoid travel if you have a fever and cough.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <div className={styles.img}>
                <Image src={Medical} alt={"/"} />
              </div>
              <p>
                if you are coughing or sneezing, wear a mask and must know how
                to use it and dispose of it properly
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <div className={styles.img}>
                <Image src={Cooking} alt={"/"} />
              </div>
              <p>eat only well-cooked food.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <div className={styles.img}>
                <Image src={Aid} alt={"/"} />
              </div>
              <p>
                if you have a fever, cough and difficulty breathing seek medical
                care early
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <div className={styles.img}>
                <Image src={Fever} alt={"/"} />
              </div>
              <p>avoid close contact with animals that are sick</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;

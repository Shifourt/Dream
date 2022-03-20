import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import Water from "../../../images/water.png";
import styles from "./information.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.aboutContant}>
      <div className={styles.Container}>
        <div className={styles.waves}>
          <div className={styles.wave}>
            <Image src={Water} alt={"/"} />
          </div>
          <div className={styles.wave}>
            <Image src={Water} alt={"/"} />
          </div>
          <div className={styles.wave}>
            <Image src={Water} alt={"/"} />
          </div>
          <div className={styles.wave}>
            <Image src={Water} alt={"/"} />
          </div>
          <div className={styles.wave}>
            <Image src={Water} alt={"/"} />
          </div>
          <div className={styles.wave}>
            <Image src={Water} alt={"/"} />
          </div>
        </div>

        <div className={styles.information}>
          <h2 data-aos="fade-out" className={styles.header}>
            Information
          </h2>
          <div data-aos="zoom-in-right" className={styles.box}>
            <div className={styles.text}>
              <h2>Education</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate praesentium quas minus aliquid itaque doloribus
                quisquam voluptates saepe repellat odit dolorum laudantium modi
                in, odio libero maxime quis culpa natus ab, repellendus
                quibusdam? Laborum tempora, in repellat necessitatibus accusamus
                optio!{" "}
              </p>
            </div>
            <div className={styles.background}></div>
          </div>
          <div data-aos="zoom-in-left" className={styles.box}>
            <div className={styles.text}>
              <h2>Safty</h2>
              <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, asperiores corrupti temporibus ex accusantium iste
                numquam. Harum cupiditate, quibusdam similique distinctio
                debitis, ab numquam, eveniet delectus impedit officia modi
                cumque.{" "}
              </p>
            </div>
            <div className={styles.background}></div>
          </div>
          <div data-aos="zoom-in-right" className={styles.box}>
            <div className={styles.text}>
              <h2>Research</h2>
              <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum sapiente neque quibusdam asperiores aperiam, optio
                veritatis illum molestiae iusto debitis quisquam ea culpa labore
                repellendus corrupti laborum mollitia! Quaerat quas quae commodi
                ratione cum quis, repudiandae similique itaque temporibus
                architecto?{" "}
              </p>
            </div>
            <div className={styles.background}></div>
          </div>
          <div data-aos="zoom-in-left" className={styles.box}>
            <div className={styles.text}>
              <h2>Beauty</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                porro a unde animi cupiditate, quisquam laboriosam optio?
                Voluptatibus maiores accusamus, aliquid incidunt in id vel. Quo
                enim nemo consectetur distinctio.{" "}
              </p>
            </div>
            <div className={styles.background}></div>
          </div>
          <div data-aos="zoom-in-right" className={styles.box}>
            <div className={styles.text}>
              <h2>Offers</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                velit ratione quasi explicabo sit eveniet alias nulla, nobis
                aperiam fugiat. Totam incidunt tempore tenetur velit, eaque
                impedit, placeat quibusdam voluptas praesentium obcaecati
                inventore, aut commodi molestias nesciunt dolorem! Eos, nemo?{" "}
              </p>
            </div>
            <div className={styles.background}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;

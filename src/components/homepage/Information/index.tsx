import Image from "next/image";
import React from "react";
import Island from "../../../images/1.jpg";
import styles from "./information.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  return (
    <div className={styles.aboutContant}>
      <div className={styles.texts}>
        <div className={styles.textOne}>
          <Image src={Island} alt={"/"} />
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
        <div className={styles.textTwo}>
          <h2>Education</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            fugit dolores mollitia similique magni id blanditiis, nobis fuga
            dolore ipsum recusandae eos ducimus? Est nulla eos culpa incidunt,
            autem ipsam.
          </p>
        </div>
        <div className={styles.textThree}>
          <h2>Safty</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in
            pariatur dolorum aut assumenda praesentium laborum ipsam a dolore
            maiores quod cumque aliquam, soluta velit repellat minima unde. Ea
            enim tempora architecto nisi itaque. Excepturi dolorem vitae
            mollitia voluptate at?
          </p>
        </div>
        <div className={styles.textFour}>
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

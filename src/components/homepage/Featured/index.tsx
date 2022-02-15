import React from "react";
import styles from "./HomeFeatured.module.scss";

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = () => {
  return (
    <div className={styles.aboutContant}>
      <h1>about us</h1>
      <div className={styles.aboutSection}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          velit ducimus, enim inventore earum, eligendi nostrum pariatur
          necessitatibus eius dicta a voluptates sit deleniti autem error eos
          totam nisi neque voluptates sit deleniti autem error eos totam nisi
          neque.
        </p>
      </div>
    </div>
  );
};

export default HomeFeatured;

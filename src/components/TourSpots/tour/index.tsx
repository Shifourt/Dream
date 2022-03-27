import { createClient } from "contentful";
import React from "react";
import styles from "./tour.module.scss";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "tourSpots" });

  return {
    props: {
      tourSpots: res.items,
    },
  };
}

interface HomeFeaturedProps {}
const HomeFeatured: React.FC<HomeFeaturedProps> = ({ tourSpots }) => {
  console.log(tourSpots);
  return <div className={styles.Contant}>tour</div>;
};

export default HomeFeatured;

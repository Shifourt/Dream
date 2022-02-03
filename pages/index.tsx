import type { NextPage } from "next";
import Hero from "../src/components/homepage/Hero";
import Layouts from "../src/components/Layouts";

const Home: NextPage = (props) => {
  return (
    <Layouts>
      <Hero />
    </Layouts>
  );
};

export default Home;

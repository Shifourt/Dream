import type { NextPage } from "next";
import Brake from "../src/components/homepage/Brake";
import Featured from "../src/components/homepage/Featured";
import Hero from "../src/components/homepage/Hero";
import Layouts from "../src/components/Layouts";

const Home: NextPage = (props) => {
  return (
    <Layouts>
      <Hero />
      <Brake />
      <Featured />
    </Layouts>
  );
};

export default Home;

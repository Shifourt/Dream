import type { NextPage } from "next";
import Beach from "../src/components/homepage/Beach";
import Brake from "../src/components/homepage/Brake";
import BrakeTwo from "../src/components/homepage/BrakeTwo";
import Featured from "../src/components/homepage/Featured";
import Hero from "../src/components/homepage/Hero";
import Information from "../src/components/homepage/Information";
import Terms from "../src/components/homepage/Terms";
import Layouts from "../src/components/Layouts";

const Home: NextPage = (props) => {
  return (
    <Layouts>
      <Hero />
      <Brake />
      <BrakeTwo />
      <Featured />
      <Beach />
      <Information />
      <Terms />
    </Layouts>
  );
};

export default Home;

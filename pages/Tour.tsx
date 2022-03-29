import type { NextPage } from "next";
import Brake from "../src/components/homepage/Brake";
import BrakeTwo from "../src/components/homepage/BrakeTwo";
import Layouts from "../src/components/Layouts";

const Home: NextPage = (props) => {
  return (
    <Layouts>
      <Brake />
      <BrakeTwo />
    </Layouts>
  );
};

export default Home;

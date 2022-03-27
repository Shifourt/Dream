import type { NextPage } from "next";
import Brake from "../src/components/homepage/Brake";
import BrakeTwo from "../src/components/homepage/BrakeTwo";
import Layouts from "../src/components/Layouts";
import Tours from "../src/components/TourSpots/tour";

const Tour: NextPage = (props) => {
  return (
    <Layouts>
      <Brake />
      <BrakeTwo />
      <Tours />
    </Layouts>
  );
};

export default Tour;

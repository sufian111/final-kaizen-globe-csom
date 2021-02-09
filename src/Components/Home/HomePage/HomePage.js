import React, { useContext } from "react";
import { UserContext } from "../../../App";
import NavBarSection from "../NavBarSection/NavBarSection";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import OurEdge from "./OurEdge/OurEdge";
import OurOfferings from "./OurOfferings/OurOfferings";

const HomePage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      <NavBarSection></NavBarSection>
      <HeaderSlider></HeaderSlider>
      <OurOfferings></OurOfferings>
      <OurEdge></OurEdge>
      <p>home</p>
    </div>
  );
};

export default HomePage;

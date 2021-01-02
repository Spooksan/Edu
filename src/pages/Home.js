import React from "react";
import Carousels from "../components/homepage/Carousel";
import Quote from "../components/homepage/Quote";
import TopCategories from "../components/homepage/TopCategories";
import Instructor from "../components/homepage/Instructor";
import Tabs from "../components/homepage/Tabs";
import Slider from "../components/homepage/Slider";

import SliderThree from "../components/homepage/SliderThree";
import Jumbo from "../components/homepage/Jumbo";

function Home() {
  return (
    <div className="home">
      <Carousels />
      <Quote />
      <TopCategories />
      <Instructor />
      <Tabs />
      <Slider />
      <SliderThree />
      <Jumbo />
    </div>
  );
}

export default Home;

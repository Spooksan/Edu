import React from "react";
import Carousels from "../components/homepage/Carousel";
import Quote from "../components/homepage/Quote";
import TopCategories from "../components/homepage/TopCategories";
import Instructor from "../components/homepage/Instructor";
import Tabs from "../components/homepage/Tabs";
import Slider from "../components/homepage/Slider";
import SliderTwo from "../components/homepage/SliderTwo";
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
      <SliderTwo />
      <Jumbo />
    </div>
  );
}

export default Home;

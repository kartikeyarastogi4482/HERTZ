import React from "react";
import Banner from "./Main-comonents/Banner";
import WhyHertz from "./Main-comonents/Why-use-hertz";
import Review from "./Main-comonents/Review";
import AutomaticList from "./Main-comonents/Automatic-list";
import Filters from "./Main-comonents/Filters";
import MusicPlayer from "./Main-comonents/Music-player";
import Getstarted from "./Main-comonents/Get-started";
import Footer from "./Main-comonents/Footer";

const page = () => {
  return (
    <div>
      <Banner imageUrl={"/Bg-photos/Banner.png"} />
      <div className="px-10">
        <WhyHertz />
        <Review />
        <AutomaticList />
        <Filters />
        {/* <MusicPlayer /> */}
        <Getstarted />
        <Footer />
      </div>
    </div>
  );
};

export default page;

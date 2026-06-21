import React from "react";
import Banner from "../Main-comonents/Banner";
import AboutHertz from "./Components/About-hertz";
import AboutMe from "./Components/About-me";
import WhyIMadeThisWebsite from "./Components/Why-i-made-this-website";
import Footer from "@/app/Main-comonents/Footer";

const page = () => {
  return (
    <div>
      <Banner imageUrl="Bg-photos/About-us.png" />
      <div className="px-10">
        <AboutHertz />
        <AboutMe />
        <WhyIMadeThisWebsite />
      </div>
      <Footer />
    </div>
  );
};

export default page;

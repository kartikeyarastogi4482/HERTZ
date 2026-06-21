import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Banner = ({imageUrl}) => {
  return (
    <div style={{backgroundImage: `url(${imageUrl})`}} className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between px-10">
      <Navbar />
      <div className="center-logo flex justify-center items-center gap-21.75 text-[60px]">
        <Image src="Hertz Logo.svg" alt="Hertz Logo" width={263} height={225} />
        <h1
          style={{
            background: "var(--primaryGradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 600,
          }}
        >
          Meet HERTZ
        </h1>
      </div>
      <div className="main-quote text-[70px] font-medium pl-5 pb-5">
        <h1>Music you don't just hear.</h1>
        <h1>You Experience.</h1>
      </div>
    </div>
  );
};

export default Banner;

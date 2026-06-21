import React from "react";
import Link from "next/link";

const AboutHertz = () => {
  return (
    <div className="section">
      <h1 className="text-[50px]">About Hertz</h1>
      <p className="text-[25px] text-(--secondaryBlack)">
        Hertz is not just a music streaming platform. It is an experience you'll
        never forget.Whatever you want to listen, Hertz won't disappoint you.
      </p>
      <Link className="text-[#004D88] text-[25px]" href="/#why-use-hertz">Learn more about experience</Link>
    </div>
  );
};

export default AboutHertz;

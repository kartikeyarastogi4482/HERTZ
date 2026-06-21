"use client";

import React, { useState } from "react";
import Image from "next/image";

const page = () => {
  const buttons = [
    { name: "Windows", color: "#0078D4" },
    { name: "Mac", color: "#FCC624" },
    { name: "Linux", color: "#A2AAAD" },
    { name: "Android", color: "#00C558" },
  ];

  const [value, setValue] = useState();
  return (
    <div className="p-10 bg-[url(/Bg-photos/Download.png)] bg-cover bg-center h-screen flex justify-center gap-70">
      <div className="left-section flex flex-col justify-between">
        <div className="buttons flex gap-3">
          {buttons.map((button, index) => (
            <button
              key={index}
              style={{
                border: `2px solid ${button.color}`,
                padding: "10px",
                borderRadius: "7px",

                backgroundColor: value === index ? button.color : "black",
                color: value === index ? "black" : button.color,
              }}
              onClick={() => setValue(index)}
            >
              {button.name}
            </button>
          ))}
        </div>

        <div className="logo flex items-center gap-5">
          <Image
            src="Hertz logo.svg"
            alt="Hertz logo"
            width={200}
            height={200}
          />
          <h1 className="text-[40px]">Hertz for pc</h1>
        </div>

        <button className="text-[25px] mx-auto bg-linear-to-b from-(--primaryBlack) to-(--darkest) to-30% p-1 px-12 rounded-full border-2 border-(--secondaryBlack)">
          Download
        </button>
      </div>
      <div className="right-section my-auto">
        <Image src="/Card-photos/Download-preview.png" alt="Download preview" width={500} height={500} />
      </div>
    </div>
  );
};

export default page;

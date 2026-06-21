"use client";

import React, { useEffect, useState } from "react";

const AutomaticList = () => {
  const [value, setValue] = useState(0);
  const [height, setheight] = useState(0);

  const lists = [
    "Favourite",
    "Played",
    "Not Played",
    "Best of the Year",
    "Repeated",
  ];

  const images = [
    "favourite.jpg",
    "played.jpg",
    "not-played.jpg",
    "Best-of-the-year.jpg",
    "repeated.jpg",
  ];

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => (prev + 1) % 5);
      setheight((prev) => (prev + 80) % 400);
    }, 1800);

    return () => clearInterval();
  }, []);

  return (
    <div className="mt-30">
      <h1 className="heading text-[50px]">Automatic list creation</h1>
      <div className="flex gap-10 h-[400]">
        <div className="scrollbar bg-(--primaryBlack) w-3 rounded-2xl">
          <div
            style={{ marginTop: height }}
            className="scroll-thumb w-3 h-20 bg-white rounded-full transition-all duration-1000"
          ></div>
          <div className="scrollbar-width w-3"></div>
        </div>
        <div className="list-names text-[40px]">
          <ul className="w-80">
            {lists.map((list, index) => (
              <li
                key={index}
                className="transition-all duration-1000 mb-6"
                style={{
                  color: value === index ? "white" : "var(--primaryBlack)",
                }}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div className="image">
          <img
            className="object-cover object-center rounded-3xl h-full w-1000 transition-all duration-1000"
            src={`/Playlist-photos/${images[value]}`}
            alt="playlist-demo"
          />
        </div>
      </div>
    </div>
  );
};

export default AutomaticList;

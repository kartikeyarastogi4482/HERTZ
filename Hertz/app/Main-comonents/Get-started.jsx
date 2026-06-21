"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Getstarted = () => {
  const [translate, setTranslate] = useState(0);
  const OS = [
    { name: "Windows", color: "#0078D4" },
    { name: "Mac", color: "#FCC624" },
    { name: "Linux", color: "#A2AAAD" },
    { name: "Android", color: "#00C558" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (translate <= -225) {
        setTranslate(0);
      } else {
        setTranslate((prev) => prev - 75);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [translate]);

  return (
    <div className="mt-30">
      <h1 className="heading text-[50px]">What are you waiting for?</h1>
      <div className="card-container flex justify-center gap-15 text-[50px]">
        <Link href="/Explore">
          <div className="card p-5 pt-100 bg-(--darker) rounded-3xl bg-[url(/Card-photos/Start-on-web.png)] bg-cover bg-center hover:scale-105 cursor-pointer duration-300">
            <h1>Get started on Web</h1>
          </div>
        </Link>

        <Link href="/Download">
          <div
            className="card p-5 pt-100 flex bg-(--darker) rounded-3xl bg-[url(/Card-photos/Download-on-os.png)] bg-cover bg-center hover:scale-105 cursor-pointer duration-300"
          >
            <h1>Download for</h1>
            <div className="items overflow-hidden h-20 ml-3">
            {OS.map((card, index) => (
              
                <h1 key={index}
                  style={{ transform: `translateY(${translate}px)`, color: card.color }}
                  className={"transition-all duration-1000"}
                >
                  {card.name}
                </h1>
            ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Getstarted;

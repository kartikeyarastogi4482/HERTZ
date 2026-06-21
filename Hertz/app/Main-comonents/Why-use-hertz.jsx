import React from "react";
import Image from "next/image";

const WhyHertz = () => {
  const cardInfo = [
    {
      img: "Icons/auto_transmission.svg",
      heading: "Rcommendation",
      content:
        "Hertz recommendation system is not just a normal system, it plays songs just for your right mood. Don't just hear what's popular, hear what you want.",
    },

    {
      img: "Icons/network_intel_node.svg",
      heading: "Mood",
      content:
        "Were you listening to pop but suddenly rock music started busting your ears? Suffer no more. Let the Hertz take the responsibility.",
    },

    {
      img: "Icons/lightstrip.svg",
      heading: "Flexible",
      content:
        "Don't want to hear a particular song? we got you. Hertz let you choose the songs that you want to hear and what you do not want to hear.",
    },

    {
      img: "Icons/autoplay.svg",
      heading: "Control",
      content:
        "Whether you want to hear a single artist's songs, or even want to hear selective songs of that artist, Hertz have no bounds. Take control of your songs.",
    },
  ];

  return (
    <div className="section" id="why-use-hertz">
      <h1 className="heading text-[50px] text-center">Why use HERTZ?</h1>
      <div className="card-container grid grid-cols-2 gap-15 justify-self-center">
        {cardInfo.map((card, index) => (
          <div key={index} className="card card-gradient p-10 max-w-170">
            <Image src={card.img} alt={card.img} width={60} height={60} className="logo mx-auto" />
            <h1 className="card-heading text-[40px] text-center">{card.heading}</h1>
            <p className="content text-[20px]">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyHertz;

import React from "react";
import Image from "next/image";

const Review = () => {
  const cardInfo = [
    {
      img: "Icons/bolt boost.svg",
      heading: "Amplify",
      content:
        "Is your song score falling flat? Boost it and let the world knowz your track deserves to sit at the very top.",
    },

    {
      img: "Icons/shining star.svg",
      heading: "Discover",
      content:
        "Tired of hearing the same old tracks on repeat? Browse the ranks, explore what's trending, and find your next favourite song.",
    },

    {
      img: "Icons/rocket_launch.svg",
      heading: "Effortless",
      content:
        "Skip the endless searching. The best songs are already ranked and waiting for you.",
    },

    {
      img: "Icons/comment.svg",
      heading: "Feedback",
      content:
        "Curious what people think? Head to the comment section and see what everyone is saying about your song.",
    },
  ];

  return (
    <div className="mt-30">
      <h1 className="heading text-[50px]">Review your Songs</h1>
      <div className="card-container grid grid-cols-4 gap-10 justify-self-center">

        {cardInfo.map((card, index) => (
          <div key={index} className="card card-gradient p-10">
            <Image src={card.img} alt="bolt boost.svg" width={60} height={60} className="logo mx-auto" />
            <h1 className="card-heading text-center text-[40px]">{card.heading}</h1>
            <p className="content">{card.content}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Review;

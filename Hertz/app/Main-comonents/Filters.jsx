import React from "react";

const Filters = () => {
  const songCategories = [
    "Pop",
    "Hip-Hop",
    "Rock",
    "Indie",
    "Soul",
    "Electronic",
    "Jazz",
    "Classical",
    "Lo-fi",
    "Metal",
    "K-Pop",
    "Anime",
    "OST",
    "Phonk",
    "And many more"
  ];

  return (
    <div className="mt-30">
      <h1 className="text-[50px]">20+ Filters</h1>
      <div className="card-container grid grid-cols-5 gap-5">
        {songCategories.map((card, index) => (
          <div
            key={index}
            className="card p-5 text-[30px] bg-(--darker) rounded-2xl text-center hover:bg-[--primaryBlack]"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;

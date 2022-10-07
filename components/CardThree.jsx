import React from "react";

const CardThree = () => {
  return (
    <div class="flex min-w-screen flex-wrap bg-black overflow-hidden py-6 px-12 ">
      <div class="w-1/2 overflow-hidden p-10 py-[123px] justify-center items-center ">
        <h1 className="text-left text-6xl w-full items-center font-bold text-white">
          Watch everywhere.
        </h1>
        <p className="text-left  text-2xl pt-8 w-full items-center font-semibold text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>

      <div class="w-1/2 overflow-hidden ">
        <img src={"card4.png"} alt="tv" className="w-full " />
      </div>
    </div>
  );
};

export default CardThree;

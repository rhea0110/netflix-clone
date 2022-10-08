import React from "react";

const CardTwo = () => {
  return (
    <div class="flex  flex-wrap bg-black  justify-between  w-full h-full">
      <div class="w-full items-start justify-start lg:w-[50%]">
        <img src={"card3.png"} alt="mobile" className="" />
      </div>
      <div class="w-full lg:w-[50%]  pr-16 py-40 justify-start items-start ">
        <h1 className="text-left text-6xl w-full items-center font-bold text-white">
          Download your shows to watch offline.
        </h1>
        <p className="text-left text-2xl pt-8 w-full  items-center font-semibold text-white">
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
};

export default CardTwo;


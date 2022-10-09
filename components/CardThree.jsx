import React from "react";

const CardThree = () => {
  return (
    <div class="flex w-full flex-wrap bg-black justify-between py-6">
      <div class="w-full lg:w-[50%] mr-auto pr-11 py-40  justify-center items-center ">
        <h1 className="text-left text-6xl w-full flex flex-col lg:flex-row items-center font-bold text-white">
          Watch everywhere.
        </h1>
        <p className="text-left text-2xl  pt-8 w-full items-center font-semibold text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>

      <div class="w-full lg:w-[50%] py-12  overflow-hidden ">
        <img src={"card4.png"} alt="tv" className="w-full h-full " />
      </div>
    </div>
  );
};

export default CardThree;

import React from "react";

const CardFour = () => {
  return (
    <div class="flex  flex-wrap bg-black w-full h-full px-12">
      <div class="w-full lg:w-[50%]">
        <img src={"card5.png"} alt="mobile" className="w-full h-full" />
      </div>
      <div class="w-full lg:w-[50%] overflow-hidden p-10 py-40 justify-center items-center ">
        <h1 className="text-left text-6xl w-full items-center font-bold text-white">
          Create profiles for children.
        </h1>
        <p className="text-left lg:w-[50%] text-2xl pt-8 w-full items-center font-semibold text-white">
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

export default CardFour;

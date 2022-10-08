import React from "react";

const CardA = () => {
    return (
      <div class="flex w-full flex-wrap  justify-between bg-black py-6">
        <div class="w-full lg:w-[50%] py-40 pl-16 justify-center items-center ">
          <h1 className="text-left text-6xl  lg:w-full items-center font-bold text-white">
              Enjoy on your TV. 
          </h1>
          <p className="text-left lg:w-full text-2xl pt-8 w-full items-center font-semibold text-white">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.  
  
          </p>
        </div>

        <div class="w-full lg:w-[50%] overflow-hidden ">
              <img src={"card2.png"} alt="tv" className="w-full " /> 
        </div>
      </div>
    );
}

export default CardA;

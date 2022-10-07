import React from "react";

const CardA = () => {
    return (
      <div class="flex min-w-screen flex-wrap bg-black overflow-hidden py-6 px-12 ">
        <div class="w-1/2 overflow-hidden p-10 py-[123px] justify-center items-center ">
          <h1 className="text-left text-6xl w-full items-center font-bold text-white">
              Enjoy on your TV. 
          </h1>
          <p className="text-left  text-2xl pt-8 w-full items-center font-semibold text-white">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.  
  
          </p>
        </div>

        <div class="w-1/2 overflow-hidden ">
              <img src={"card2.png"} alt="tv" className="w-full " /> 
        </div>
      </div>
    );
}

export default CardA;

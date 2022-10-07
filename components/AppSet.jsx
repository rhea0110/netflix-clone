import React from "react";
import Link from "next/link";
import RadioButton from "./RadioButton"

const AppSet = () => {
    const shows = [
    { title: "Third-Party Apps Authentication" },
    { title: "User Privacy" },
    { title: "Save History" },
    { title: "Upcoming Events Alerts" },
    { title: "Google Chrome Cast" },
    { title: "Payment Reminders" },
    { title: "Kids Safe" },
    { title: "Parental Control" },
    { title: "Profile for All"},
    { title: "Profile Locks" },
    { title: "See Profile Watch Histories" },
  ];

  return (
    <div className="w-full flex flex-row h-full bg-black">
      <div className="flex flex-col w-full ">
        <div className="flex flex-row  w-full">
          <div className="text-white text-3xl font-medium mt-[50px] ml-10 mb-10">
            Settings
          </div>
          <div className="ml-auto flex flex-row gap-x-5  mr-12 mt-[20px] h-fit">
            <Link href="/alert">
              <span className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                Learn More
              </span>
            </Link>
            <Link href="/settings">
              <button className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                Go Back
              </button>
            </Link>
          </div>
        </div>
        {shows.map((show, index) => (
          <div key={index} className="flex flex-row mb-5 w-full">
            <div className="flex flex-row px-9  w-full my-2 ">
              <span className="text-lg text-center ml-4 text-white font-semibold">
                {show.title}
              </span>
              <div className="ml-auto my-auto">
                <RadioButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSet;

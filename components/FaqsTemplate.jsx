import React from "react";
import Link from "next/link"
const FaqsTemplate = () => {
  return (
    <div className="w-full  flex bg-black items-center justify-center">
      <div className="w-full lg:w-[50%] items-center justify-center h-fit">
        <p className="text-center text-lg font-semibold text-white pb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Link href="/home">
          <div className="px-5 flex w-full flex-row pb-16">
            <input
              className="w-[75%] h-[65px] border px-10 border-white bg-white"
              placeholder="Email Address"
            ></input>
            <div className="flex flex-row gap-x-1 w-[25%] h-[65px] cursor-pointer hover:bg-red-800 border border-red-600 bg-red-600 text-white font-semibold text-center justify-center items-center text-2xl ">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0  24 24"
                stroke-width="3"
                stroke="white"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FaqsTemplate;

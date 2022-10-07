import React from "react";
import Link from "next/link";

const Template = () => {
    return (
      <div className="w-full py-24 flex items-center justify-center">
        <div className="w-7/12 items-center justify-center h-fit">
          <h1 className="text-center text-6xl font-bold text-white">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="text-center text-3xl pt-8 font-bold text-white">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-center text-2xl pt-8 font-semibold text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Link href="/home">
            <div className="px-5 flex flex-row pt-6">
              <input
                className="w-[65%] h-[65px] border px-10 border-white bg-white"
                placeholder="Email Address"
              ></input>
              <div className="flex cursor-pointer flex-row gap-x-1 w-[35%] h-[65px]  hover:bg-red-800 border border-red-600 bg-red-600 text-white font-semibold text-center justify-center items-center text-4xl ">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="1 -3 24 24"
                  stroke-width="3"
                  stroke="white"
                  class="w-6 h-6"
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
}


export default Template;
import React from "react";
import Link from "next/link";
const SignUnTemplate = () => {
  return (
    <div className="min-w-screen lg:w-[25%] flex items-center  justify-center p-11 -mt-2 bg-black bg-opacity-90">
      <div className="min-w-screen items-left justify-left align-center">
        <h1 className="text-left text-3xl font-bold text-white mb-8">
          Sign Up
        </h1>
        <div className="text-left flex flex-col gap-y-4">
          <input
            className="w-full h-[50px] rounded opacity-90 px-10 text-gray-900 bg-[#2D3033]"
            placeholder="Email or Phone Number"
          ></input>
          <input
            className="w-full h-[50px] rounded opacity-90 px-10 text-gray-900 bg-[#2D3033]"
            placeholder="Password"
          ></input>
          <input
            className="w-full h-[50px] rounded opacity-90 px-10 text-gray-900 bg-[#2D3033]"
            placeholder="Re-type Password"
          ></input>
          <Link href="/home">
            <button className="w-full h-[50px] mt-8 rounded opacity-90 px-10 text-white font-normal bg-red-600 hover:bg-red-700">
              Create Account
            </button>
          </Link>
        </div>
        <div className="flex flex-row mt-1">
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-white font-extralight"
              for="flexCheckDefault"
            >
              Remember me?
            </label>
          </div>
          <button className="w-fit justify-end items-end ml-auto  whitespace-nowrap  font-extralight text-left h-[50px] -mt-3 text-white">
            Need help?
          </button>
        </div>
        <div className="text-left flex flex-col pt-6">
          <div className="flex flex-row gap-x-2">
            <div className="text-white font-extralight">
              Enjoy binge watch and more with Netflix!
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="text-white font-extralight">Have an account?</div>
            <Link href="/netsignin">
              <div className="text-white font-normal hover:underline cursor-pointer">Sign In</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUnTemplate;

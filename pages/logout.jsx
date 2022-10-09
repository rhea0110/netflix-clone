import React from "react";
import Link from "next/link";

const Logout = () => {
    return (
      <div className="w-full  flex-col justify-center items-center flex p-20 h-screen bg-black">
        <div className=" mt-12 text-white font-mono text-3xl ">
          {"Please click on the link to visit my next project "}
          <a
            className="text-red-500 text-3xl underline"
            href="https://rheajain.netlify.app/"
          >
              Live Profile
          </a>
        </div>
        <div className=" mt-6 font-mono text-white text-3xl ">
          {"You can also visit my linkedIn profile by clicking on the link "}
          <a
            className="text-red-500 text-3xl underline"
            href="https://www.linkedin.com/in/rhea-jain-2462a3189/"
          >
            Rhea Jain
          </a>
        </div>
        <div className=" mt-6 text-white font-mono text-3xl ">
          {"Want to go back to the main page? Do not worry, click on the link "}
          <Link
            href="/"
          >
            <span  className="cursor-pointer text-red-500 text-3xl underline">
              Home
              </span>
          </Link>
        </div>
      </div>
    );
}

export default Logout;
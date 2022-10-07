import React from "react";
import Link from "next/link";

const Logout = () => {
    return (
      <div className="w-full  flex-col justify-center items-center flex p-20 h-screen bg-black">
        <div>
          <h1 className="w-full h-full  font-mono text-5xl justify-center items-center flex">
            {"Thankyou for watching my project!".toUpperCase()}
          </h1>
        </div>
        <div className=" mt-12 font-mono text-xl ">
          {"Click on the link to visit my "}
          <a
            className="text-red-500 text-xl underline"
            href="https://rheajain.netlify.app/"
          >
            Live Profile
          </a>
        </div>
        <div className=" mt-6 font-mono text-xl ">
          {"You can also visit my linkedIn profile "}
          <a
            className="text-red-500 text-xl underline"
            href="https://www.linkedin.com/in/rhea-jain-2462a3189/"
          >
            Rhea Jain
          </a>
        </div>
        <div className=" mt-6 font-mono text-xl ">
          {"Go back to main page? Do not worry click on the link "}
          <Link
            href="/"
          >
            <span  className="cursor-pointer text-red-500 text-xl underline">
              Home
              </span>
          </Link>
        </div>
      </div>
    );
}

export default Logout;
import React from "react";
import Head from "next/head";

const Home = () => {
  <Head>
    <title>Home</title>
  </Head>;
  return (
    <div>
      <div className="absolute z-[-1] w-full h-full ">
        <img
          src={"home.png"}
          alt="landingpage"
          className="w-full h-full"
        />
      </div>
      <div className="relative w-full h-full ">
        <div className="relative w-48 py-6 ml-8">
          <img
            src={"logo.png"}
            alt="landingpage"
            className="w-full h-full"
          />
        </div>
        <div className="justify-center border align-middle items-center w-[65%] mx-auto my-12 ] ">
          <h1 className="text-center text-8xl items-center font-bold text-white">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="text-center text-3xl pt-8 items-center font-bold text-white">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-center text-2xl pt-8 items-center font-semibold text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import HomeCards from "../components/HomeCards";
const TvShows = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="h-full w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <HomeCards />
        </div>
      </div>
    </>
  );
};

export default TvShows;

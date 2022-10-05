import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
const TvShows = () => {
    
  return (
    <>
      <Head>
        <title>Home</title>
    </Head>
      <div className="h-full w-full text-white">
        <Navbar/>
      </div>
      </>
    );
}

export default TvShows;

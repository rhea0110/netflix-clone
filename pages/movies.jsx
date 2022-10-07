import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import MoviesCards from "../components/MoviesCards";
const Movies = () => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <div className="h-full bg-black w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <MoviesCards />
        </div>
      </div>
    </>
  );
};

export default Movies;

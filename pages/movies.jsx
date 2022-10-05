import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
const Movies = () => {
    
    return (
      <>
      <Head>
        <title>Movies</title>
    </Head>
      <div className="h-full w-full text-white">
        <Navbar/>
      </div>
      </>
    );
}

export default Movies;

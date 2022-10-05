import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
import ExclusiveCards from "../components/ExclusiveCards";

const RealityShows = () => {

    return (
      <>
        <Head>
          <title>Exclusive Reality Shows</title>
        </Head>
        <div className="h-full w-full flex">
          <div className="text-white">
            <Navbar />
          </div>
          <div className="w-full h-fit">
         <ExclusiveCards/>
          </div>
        </div>
      </>
    );
}

export default RealityShows;

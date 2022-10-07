import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import ComingSoonCards from "../components/ComingSoonCards";

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>ComingSoon</title>
      </Head>
      <div className="h-full w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <ComingSoonCards />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;

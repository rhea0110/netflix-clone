import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import KidsCard from "/components/KidsCard";
const Kids = () => {
  return (
    <>
      <Head>
        <title>Kids</title>
      </Head>
      <div className="h-full bg-black w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <KidsCard />
        </div>
      </div>
    </>
  );
};

export default Kids;

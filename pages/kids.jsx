import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
const Kids = () => {

  return (
    <>
      <Head>
    <title>Kids</title>
  </Head>
    <div className="h-full w-full text-white">
      <Navbar />
    </div>
    </>
  );
};

export default Kids;

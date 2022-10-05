import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
const Languages = () => {
  
    return (
        <>
          <Head>
      <title>Languages</title>
    </Head>
      <div className="h-full w-full text-white">
        <Navbar/>
      </div>
      </>
    );
}

export default Languages;

import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
const ComingSoon = () => {
   
    return (
      <>
       <Head>
        <title>ComingSoon</title>
    </Head>
      <div className="h-full w-full text-white">
        <Navbar/>
      </div>
      </>
    );
}

export default ComingSoon;

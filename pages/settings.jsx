import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
const Settings = () => {
   
    return (
        <>
         <Head>
        <title>Settings</title>
    </Head>
      <div className="h-full w-full text-white">

        <Navbar/>
      </div>
      </>
    );
}

export default Settings;

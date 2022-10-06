import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
import AppSet from "../components/AppSet";
const AppsSettings = () => {
  return (
    <>
      <Head>
        <title>App Settings</title>
      </Head>
      <div className="h-full w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <AppSet />
        </div>
      </div>
    </>
  );
};

export default AppsSettings;

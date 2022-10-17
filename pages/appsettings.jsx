import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import AppSet from "../components/AppSet";
const AppsSettings = () => {
  return (
    <>
      <Head>
        <title>App Settings</title>
      </Head>
      <div className="min-h-screen bg-black w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full min-h-screen">
          <AppSet />
        </div>
      </div>
    </>
  );
};

export default AppsSettings;

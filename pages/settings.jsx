import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import SettingComp from "../components/SettingComp";
const Settings = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <div className="h-full w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
        <div className="w-full h-fit">
          <SettingComp />
        </div>
      </div>
    </>
  );
};

export default Settings;

import React from "react";
import Head from "next/Head";
import Navbar from "/components/Navbar";
import MyList from "../components/MyList";
const MyListNet = () => {
  return (
    <>
      <Head>
        <title>My List</title>
      </Head>
      <div className="h-full w-full flex">
        <div className="text-white">
          <Navbar />
        </div>
              <div className="w-full h-fit">
                  <MyList />
        </div>
      </div>
    </>
  );
};

export default MyListNet;

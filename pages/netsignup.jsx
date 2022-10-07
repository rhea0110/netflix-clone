import React from "react";
import SignUpTemplate from "/components/SignUpTemplate";
import Head from "next/head";
import Footer from "../components/Footer";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import FooterThree from "../components/FooterThree";
import FooterButton from "../components/FooterButton";

const NetSignup = () => {
  <Head>
    <title>Sign Up</title>
  </Head>;
  return (
    <div className="flex justify-center bg-black items-center">
      <div className="w-full h-fit">
        <div>
          <div className="">
            <img
              src={"home.png"}
              alt="home"
              className=" absolute w-full h-screen"
            />
          </div>

          <div className="flex flex-row w-full">
            <div className="w-48 py-6 ml-10 opacity-100">
              <img
                src={"logo.png"}
                alt="logo"
                className=" relative w-full h-full"
              />
            </div>
          </div>
          <div className="relative w-full h-full justify-center items-center flex">
            <SignUpTemplate />
          </div>
          <div className="relative w-full h-fit pt-20">
            <div className="">
              <img
                src={"home.png"}
                alt="home"
                className=" absolute w-full h-[82%]"
              />
              <div className="opacity-90 bg-black h-full w-full">
                <div className="w-full h-fit justify-start items-start flex flex-row px-[294px]">
                  <div className="text-[#707070] py-10">
                    Questions? Call 000-800-040-1843
                  </div>
                </div>
                <div className="w-full h-fit justify-center items-center flex flex-row pb-7 px-56">
                  <Footer />
                  <FooterOne />
                  <FooterTwo />
                  <FooterThree />
                </div>
                <div className="w-full h-fit justify-start items-start flex flex-col  px-[294px]">
                  <div className="text-[#707070]">
                    <FooterButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetSignup;

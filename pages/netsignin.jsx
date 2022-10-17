import React from "react";
import SignInTemplate from "/components/SignInTemplate";
import Head from "next/head";
import Footer from "../components/Footer";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import FooterThree from "../components/FooterThree";
import FooterButton from "../components/FooterButton";

const NetSignin = () => {
  <Head>
    <title>Sign In</title>
  </Head>;
  return (
    <div className="flex bg-black justify-center w-full h-full overflow-hidden items-center">
      <div className="w-full h-fit">
        <div>
          <div className="">
            {/*   <img
              src={"home.png"}
              alt="home"
              className=" absolute w-full h-screen"
            /> */}
          </div>

          <div className="flex flex-row w-full">
            <div className="w-48 py-6 ml-10 opacity-100">
              <img
                src={"logo.png"}
                alt="logo"
                className=" relative w-full h-full "
              />
            </div>
          </div>
          <div className="relative w-full h-full justify-center items-center flex">
            <SignInTemplate />
          </div>
          <div className="relative w-full h-fit pt-20">
            <div className="">
              {/*  <img
                src={"home.png"}
                alt="home"
                className=" absolute w-full h-[82%]"
              /> */}
              <hr class="border-4 border-gray-700" />
              <div className="opacity-90 bg-black h-full w-full">
                <div className="w-full h-fit justify-center items-center  flex flex-wrap ">
                  <div className="w-full lg:w-[50%]   h-full mx-auto justify-between items-center flex flex-wrap pb-7 text-[#707070] py-10">
                    Questions? Call 000-800-040-1843
                  </div>
                </div>
                <div className="w-full lg:w-[50%]   h-full mx-auto justify-between items-center flex flex-wrap pb-7 ">
                  <div className="">
                    <Footer />
                  </div>
                  <div className="">
                    <FooterOne />
                  </div>
                  <div className="">
                    <FooterTwo />
                  </div>
                  <div className="">
                    <FooterThree />
                  </div>
                </div>
                <div className="w-full h-fit justify-center items-center flex flex-col  ">
                  <div className=" w-full lg:w-[50%]   h-full mx-auto justify-between items-center flex flex-wrap pb-7  text-[#707070]">
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

export default NetSignin;

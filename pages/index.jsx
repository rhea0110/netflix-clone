import React from 'react';
import Button from '../components/Button';
import CardTwo from "../components/CardTwo";
import CardFour from "../components/CardFour";
import CardThree from "../components/CardThree";
import Template from '/components/Template';
import Faqs from '../components/Faqs';
import FaqsTemplate from "../components/FaqsTemplate";
import Footer from '../components/Footer';
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import FooterThree from "../components/FooterThree";
import FooterButton from "../components/FooterButton";
import Head from "next/head";
import CardA from '../components/CardA';

const Home = () => {
  <Head>
    <title>Welcome || Page</title>
  </Head>
    return (
      <div className="w-full h-full bg-black">
        <div className="w-screen bg-black h-screen ">
          <div>
            <div className="bg-black w-screen h-full opacity-30">
              <img
                src={"home.png"}
                alt="home"
                className=" absolute w-full h-screen"
              />
            </div>

            <div className="flex flex-row w-full">
              <div className="w-48 py-6 ml-10">
                <img
                  src={"logo.png"}
                  alt="logo"
                  className=" relative w-full h-full"
                />
              </div>

              <div className="relative ml-auto w-fit py-6 mr-10">
                <Button />
              </div>
            </div>

            <div className="relative w-full h-full">
              <Template />
            </div>
          </div>
        </div>
        <hr class="border-4 border-gray-700" />
        <div className="w-full h-fit">
          <CardA />
        </div>
        <hr class="border-4 border-gray-700" />
        <div className="w-full h-fit">
          <CardTwo />
        </div>
        <hr class="border-4 border-gray-700" />
        <div className="w-full h-fit">
          <CardThree />
        </div>
        <hr class="border-4 border-gray-700" />
        <div className="w-full h-fit">
          <CardFour />
        </div>
        <hr class="border-4 border-gray-700" />
        <div className="w-full h-fit">
          <Faqs />
          <div className="py-5">
            <FaqsTemplate />
          </div>
        </div>
        <hr class="border-4 border-gray-700" />
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
    );
};

export default Home;
import React from "react";
import Head from "next/head";
import Link from "next/link";
const Languages = () => {
  const line = [
    {
      lang: "English",
      src: "eng",
    },
    {
      lang: "Hindi",
      src: "india",
    },
    {
      lang: "Turkish",
      src: "turk",
    },
    {
      lang: "Hebrew",
      src: "heb",
    },
    {
      lang: "Arabic",
      src: "arab",
    },
    {
      lang: "Spanish",
      src: "espa",
    },
    {
      lang: "French",
      src: "fre",
    },
    {
      lang: "German",
      src: "gem",
    },
    {
      lang: "Russian",
      src: "rus",
    },
    {
      lang: "African",
      src: "afn",
    },
    {
      lang: "Chinese",
      src: "chin",
    },
    {
      lang: "Portugese",
      src: "port",
    },
    {
      lang: "Korean",
      src: "kon",
    },
    {
      lang: "Polish",
      src: "pol",
    },
    {
      lang: "Italian",
      src: "it",
    },
    {
      lang: "Japanese",
      src: "japan",
    },
    {
      lang: "Indonesian",
      src: "indo",
    },
    {
      lang: "Egyptian Arabic",
      src: "eg",
    },
  ];
  return (
    <>
      <Head>
        <title>Languages</title>
      </Head>
      <div className="bg-black w-full h-full">
        <div className="flex flex-row">
          <div className="text-red-500  text-3xl font-medium mt-[40px] ml-10">
            Languages
          </div>
          <div className="ml-auto flex flex-row gap-x-5  mr-12 mt-[20px] h-fit">
            <Link href="/alert">
              <span className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                Learn More
              </span>
            </Link>
            <Link href="/settings">
              <button className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                Go Back
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div type="circle" className="w-full h-full p-10 my-auto">
            {line.map((lines, index) => (
              <div
                key={index}
                className="text-white my-3 flex border-b border-red-500 flex-row text-lg text-left font-mono text-md"
              >
                <div className="mt-2">{lines.lang.toUpperCase()}</div>
                <img src={`${lines.src}.png`} className={`w-12 ml-auto`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;

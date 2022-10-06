import React from "react";
import Head from "next/head"
import Link from "next/link"
const Guidelines = () => {
    const line = [
      {
        title: "Include as much of the original content as possible.",
      },
      {
        title: "Do not simplify or water down the original dialogue.",
      },
      {
        title:
          "Where content has been dubbed into English, please refer to the dubbing script or dubbed audio as the basis for the SDH file and ensure that the two match as much as reading speed and timings allow.",
      },
      {
        title:
          "Truncating the original dialogue should be limited to instances where reading speed and synchronicity to the audio are an issue.",
      },
      {
        title:
          "When editing for reading speed, favor text reduction, deletion and condensing but do not paraphrase",
      },
      {
        title:
          "Transcription of the source language should follow the word choice and sentence order of the spoken dialect. Slang and other dialectal features should not be changed.",
      },
      {
        title:
          "When including ellipses in subtitles, please use the single smart character (U+2026) as opposed to three dots/periods in a row.",
      },
      {
        title:
          "Decades should be written using numerals in the following format: nineteen fifties should be 1950s",
      },
      {
        title:
          "Avoid going back and forth between italicized and non-italicized subtitles when the speaker is on and off screen. If the speaker is on-camera for at least part of the scene, do not italicize. Leave italics for off-screen narrators.",
        },
        {
          title: "Foreign words that are used in a mostly English line of dialogue do not require identifiers, but should be italicized. Always verify spelling, accents and punctuation, if applicable."
      },
    ];
    return (
      <>
        <Head>
          <title>Guidelines</title>
        </Head>
        <div>
          <div className="flex flex-row">
            <div className="text-red-500  text-3xl font-medium mt-[40px] ml-10">
              Guidelines
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
            <ul type="circle" className="w-full p-10 my-2">
              {line.map((lines, index) => (
                <li
                  key={index}
                  className="text-white my-3 text-lg text-left font-mono text-md"
                >
                  - {lines.title.toUpperCase()}.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
}

export default Guidelines;
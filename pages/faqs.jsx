import React from "react";
import Head from "next/head";
import Link from "next/link";
const Faqs = () => {
  const line = [
    {
      questions: "How to sign up for Netflix",
      answers:
        "As a Netflix member, you are charged once a month on the date you signed up. There are no contracts, no cancellation fees, and no commitments. You have the freedom to change your plan or cancel online at any time if you decide Netflix isnt for you.",
    },
    {
      questions: " What devices can I use to stream Netflix?",
      answers:
        " You can stream Netflix from any Internet-connected device that offers the Netflix app. Netflix-ready devices include streaming media players, smart TVs, game consoles, set-top boxes, Blu-ray players, smartphones, tablets, PCs, and laptops.",
    },
    {
      questions: " How to watch Netflix on your TV",
      answers:
        " On Netflix-ready TVs, the Netflix app is on the main menu or home screen. If your TV has an app store, search for Netflix to see if the app is available.",
    },
    {
      questions: "Netflix account email was changed without permission",
      answers:
        "We take account security seriously at Netflix. If you got an email from Netflix saying your email address has been changed and you did not request the change, please contact us.",
    },
    {
      questions: " Netflix says to sign up when trying to sign in",
      answers:
        " A charge from Netflix in the last month: Your account is still active, but it might be set up with a different email address. Try signing in with a different email address. No charge from Netflix in the last month: Your account might not be active anymore. Follow the steps to restart your account.",
    },
  ];
  return (
    <>
      <Head>
        <title>Faqs</title>
      </Head>
      <div className="h-full w-full bg-black">
        <div className="flex flex-row">
          <div className="text-red-500  text-3xl font-medium mt-[40px] ml-10">
            Faqs
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
              <>
                <li
                  key={index}
                  className="text-white my-3 text-lg text-left font-mono text-md"
                >
                  {lines.questions.toUpperCase()}.
                </li>
                <li className="text-red-500 my-3 text-lg text-left font-mono text-md">
                  - {lines.answers.toUpperCase()}.
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Faqs;

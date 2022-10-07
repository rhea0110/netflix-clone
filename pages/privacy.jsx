import React from "react";
import Head from "next/head";
import Link from "next/link";
const Privacy = () => {
  const line = [
    {
      title:
        "Your activity on the Netflix service, such as title selections, shows you have watched, search queries, and activity in Netflix games",
    },
    {
      title:
        "Your interactions with our emails and texts, and with our messages through push and online messaging channels",
    },
    {
      title:
        "Details of your interactions with our customer service, such as the date, time and reason for contacting us, transcripts of any chat conversations, and if you call us, your phone number and call recordings",
    },
    {
      title:
        "Device IDs or other unique identifiers, including for your network devices, and devices that are Netflix capable on your Wi-Fi network",
    },
    {
      title:
        "Resettable device identifiers also known as advertising identifiers, such as those on mobile devices, tablets, and streaming media devices that include such identifiers see the Cookies and Internet Advertising section below for more information",
    },
    {
      title:
        "information collected via the use of cookies, web beacons and other technologies, including ad data such as information on the availability and delivery of ads, the site URL, as well as the date and time. See our Cookies and Internet Advertising section for more details.",
    },
    {
      title:
        "search queries and commands applicable to Netflix that you make through Partner devices or voice assistant platforms",
    },
    {
      title:
        "service activation information such as your email address or other contact information",
    },
    {
      title:
        "security service providers who provide us with information to secure our systems, prevent fraud and help us protect the security of Netflix accounts",
    },
    {
      title:
        "payment service providers who provide us with payment or balance information, or updates to that information, based on their relationship with you",
    },
    {
      title:
        "online and offline data providers, from which we obtain aggregated demographic, interest based and online advertising related data",
    },
    {
      title:
        "publicly-available sources such as publicly available posts on social media platforms and information available through public databases associating IP addresses with internet service providers",
    },
    {
      title:
        "secure our systems, prevent fraud and help us protect the security of Netflix accounts",
    },
  ];
  return (
    <>
      <Head>
        <title>Privacy</title>
      </Head>
      <div className="w-full h-screen bg-black">
        <div className="flex flex-row">
          <div className="text-red-500  text-3xl font-medium mt-[40px] ml-10">
            Privacy
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

        <div className="bg-black min-h-screen w-full">
          <ul type="circle" className="w-full bg-black h-full text-white p-10 my-2">
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
};

export default Privacy;

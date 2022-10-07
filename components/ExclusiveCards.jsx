import React from "react";
import Link from "next/link";
const ExclusiveCards = () => {
  const shows = [
    {
      title: "F.R.I.E.N.D.S",
      src: "frd",
      description:
        "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons.[1] With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive producers were Kevin S. Bright, Kauffman, and Crane.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=LTpmw0Ac6Zs",
    },
    {
      title: "Diana - Princess of Wales",
      src: "diana",
      description:
        "Diana, Princess of Wales (born Diana Frances Spencer; 1 July 1961 – 31 August 1997) was a member of the British royal family. She was the first wife of Charles, Prince of Wales (later King Charles III) and mother of Princes William and Harry. Diana's activism and glamour made her an international icon and earned her enduring popularity as well as almost unprecedented public scrutiny.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=PisHN6iFq-U",
    },
    {
      title: "Drive",
      src: "drive",
      description:
        "Drive is a 2019 Indian Hindi-language action-heist film written, edited and directed by Tarun Mansukhani and produced by Hiroo Yash Johar, Karan Johar and Apoorva Mehta under Dharma Productions.[2] Starring Sushant Singh Rajput, Jacqueline Fernandez, Vikramjeet Virk, Sapna Pabbi, Pankaj Tripathi and Boman Irani the story of the film revolves around the manhunt for an infamous 'King' for a robbery of 300 kilograms of gold. An undercover agent infiltrates a street racing gang who is chasing the King.[3][4][5][6] The film was scheduled to release on 7 September 2018, but was pushed to 28 June 2019, ultimately to not see a theatrical release. It was directly released on Netflix on 1 November 2019. It marked the last film of Rajput before his demise on 14 June 2020.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=7ZU6X0wyzgc",
    },
    {
      title: "The Royal Treatment",
      src: "trt",
      description:
        "NYC hairdresser Isabella gets the opportunity of a lifetime to work at Prince Thomas's wedding. While getting to know each other better, Isabella and Thomas learn the value of following their hearts.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=KWxJXZ3S3-g",
    },
    {
      title: "Fauda",
      src: "fau",
      description:
        "After retiring from the Israel Defense Force, Doron is working on a vineyard. He gets roped back into active duty, though, upon learning that an enemy who Doron thought his unit had killed is still alive and plans on attending his brother's wedding. Doron rejoins the IDF team with the intention of going under cover at the wedding, but the plan goes awry when the team's cover is blown. That sets into motion a chaotic chain of events and leads IDF into a manhunt to locate and kill the squad's target.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=_2rm_4e3iYQ",
    },
    {
      title: "Sen Cal Kapimi - Turkche",
      src: "sen",
      description:
        "Eda longs to become a landscape architect. After losing her parents when she was young, this brilliant student pursued her studies with scholarships. However, a man will cross her path and scupper her plans.",
      btn: "Watch Trailer",
      href: "https://www.youtube.com/watch?v=3NZbG_GmSsM",
    },
  ];

  return (
    <div className="w-full flex bg-black flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row w-full">
          <div className="text-white text-3xl font-medium mt-[50px] ml-10">
            Premium Shows & Movies
          </div>
          <div className="ml-auto mr-12 mt-[20px] h-fit">
            <Link href="/alert">
              <span className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-gray-900 font-medium">
                Learn More
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap px-10 w-full gap-x-14">
          {shows.map((show, index) => (
            <div
              key={index}
              className="flex hover:scale-110 flex-wrap w-full my-6 border-2 h-fit rounded-lg border-gray-900 lg:w-[30%]"
            >
              <img
                src={`${show.src}.jpg`}
                className="w-full h-1/2 rounded-t-lg"
              />
              <div className="p-5 h-fit ">
                <span className="text-lg text-center truncate text-white font-semibold">
                  {show.title}
                </span>
                <br />
                <span className="text-md line-clamp-3 mt-4 text-left text-white font-normal">
                  {show.description}
                </span>
                <Link href={show.href}>
                  <a>
                    <div className=" w-fit flex ml-auto pt-6 ">
                      <span className="text-md flex cursor-pointer flex-wrap gap-x-1 text-center border-2 border-red-600 py-1.5 px-4 text-white font-light">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                        {show.btn}
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveCards;

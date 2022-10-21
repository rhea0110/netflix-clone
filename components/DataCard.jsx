import React from "react";
import {useState} from "react";
import Link from "next/link";
const ExclusiveCards = (props) => {
    const {data} = props;
  const shows = [
  ];

    const [isHover, setIsHover] = useState(false);
    const [checkIndex, setCheckIndex] = useState(-1);
  return (
    <div className="w-full flex bg-black flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row w-full">
          <div className="text-white text-3xl font-medium mt-[50px] ml-10">
            Premium Shows & Movies
          </div>
          <div className="ml-auto mr-12 mt-[20px] h-fit">
            <Link href="/alert">
              <span className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                Learn More
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap px-10 w-full gap-x-14">
          {data.map((show, index) => (
            <div
              key={index}
              className="flex relative hover:scale-110 flex-wrap w-full my-6 duration-800   overflow-hidden  transition-all rounded-xl border-gray-900 lg:w-[30%]"
            >
              <img
                src={`${show.src}.jpg`}
                      className="w-full h-[250px] rounded-t-lg" onMouseEnter={() => { setIsHover(true); setCheckIndex(index) }} onMouseLeave={() => setIsHover(false)}
                  />
                  { isHover && index === checkIndex &&
                      <div className="p-5 absolute bg-black/80 bottom-0 left-0 h-full " onMouseOver={() => setIsHover(true)}>
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
                  }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveCards;

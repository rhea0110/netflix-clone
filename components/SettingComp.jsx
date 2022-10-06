import React from "react";
import Link from "next/link"

const SettingComp = () => {
    const shows = [
      { title: "My List", srcIcon: "menu", srcOpen: "right", href: "/mylist" },
      {
        title: "App Settings",
        srcIcon: "set",
        srcOpen: "right",
        href: "/appsettings",
      },
      {
        title: "Privacy",
        srcIcon: "padlock",
        srcOpen: "right",
        href: "/privacy",
      },
      {
        title: "Newsletter",
        srcIcon: "Newsletter",
        srcOpen: "right",
        href: "/newsletter",
      },
      { title: "Faqs", srcIcon: "faq", srcOpen: "right", href: "/faqs" },
      {
        title: "Guidelines",
        srcIcon: "guidelines",
        srcOpen: "right",
        href: "/guidelines",
      },
      { title: "Laws", srcIcon: "law-book", srcOpen: "right", href: "/laws" },
    ];

    return (
      <div className="w-full flex flex-row">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row  w-full">
            <div className="text-white text-3xl font-medium mt-[50px] ml-10 mb-10">
              Settings
            </div>
            <div className="ml-auto mr-12 mt-[20px] h-fit">
              <Link href="/alert">
                <span className="text-md flex ml-auto h-fit pt-8 cursor-pointer flex-wrap gap-x-1 text-center py-1.5 px-1 text-red-600 border-b border-red-600 font-medium">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
          {shows.map((show, index) => (
            <Link href={show.href} 
                  key={index}
            >
              <a className="flex flex-row mb-5 w-full">
                <div
                  className="flex flex-row px-9 w-full my-2 "
                >
                  <div>
                    <img
                      src={`${show.srcIcon}.png`}
                      className="w-10 h-8   rounded-t-lg"
                    />
                  </div>
                  <div>
                    <span className="text-lg text-center ml-4 text-white font-semibold">
                      {show.title}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <img
                      src={`${show.srcOpen}.png`}
                      className="w-8 h-8 rounded-t-lg"
                    />
                  </div>
                </div>
              </a>
            </Link>
          ))}
            </div>
      </div>
    );
}

export default SettingComp;
